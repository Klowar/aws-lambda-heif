#include <iostream>
#include <node/node.h>
#include <errno.h>
#include <unistd.h>
#include <fcntl.h>

namespace test
{
using v8::Array;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;
int doNotCloseStreamsOnExit(int desc)
{
    int flags = fcntl(desc, F_GETFD, 0);
    if (flags < 0)
        return flags;
    flags &= ~FD_CLOEXEC; //clear FD_CLOEXEC bit
    return fcntl(desc, F_SETFD, flags);
}
void Method(const FunctionCallbackInfo<Value> &args)
{
    // const Local<Promise> defered = Promise::New(args.GetIsolate()).As<Promise>();
    // Napi::Promise::Deferred defered = Napi::Promise::Deferred::New(args.GetIsolate());
    Local<Array> arr = args[0].As<Array>();
    const int leng = arr->Length();
    char **argv = new char *[leng + 2];
    // std::cout << arr->Length() << " Lenght " << std::endl;
    argv[0] = "heif-enc-node";
    for (int i = 0; i < leng; i++)
    {
        Local<String> str = arr->Get(args.GetIsolate()->GetCurrentContext(), i).ToLocalChecked().As<String>();
        argv[i + 1] = new char[str->Length()];
        str->WriteUtf8(args.GetIsolate(), argv[i + 1]);
    }
    argv[leng + 1] = NULL;
    pid_t p = fork();
    if (p)
    {
        int status = 0;
        wait(&status);
        args.GetReturnValue()
            .Set(arr->Get(args.GetIsolate()->GetCurrentContext(), 0).ToLocalChecked().As<String>());
    }
    else
    {
        // fix stream flags
        doNotCloseStreamsOnExit(0); //stdin
        doNotCloseStreamsOnExit(1); //stdout
        doNotCloseStreamsOnExit(2); //stderr
        int res = execv("/usr/local/bin/heif-enc-node", argv);
        std::cout << res << std::endl;
        if (res < 0)
        {
            char *err_description = strerror(errno);
            std::cout << err_description << std::endl;
        }
        return;
    }
}

void Initialize(Local<Object> exports)
{
    NODE_SET_METHOD(exports, "createHeic", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace test
