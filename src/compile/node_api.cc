#include <iostream>
#include <node/node.h>
#include <errno.h>
#include <unistd.h>
#include <fcntl.h>
#include "node_enc.h"

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

void Method(const FunctionCallbackInfo<Value> &args)
{
    // const Local<Promise> defered = Promise::New(args.GetIsolate()).As<Promise>();
    // Napi::Promise::Deferred defered = Napi::Promise::Deferred::New(args.GetIsolate());
    Local<Array> arr = args[0].As<Array>();
    const int leng = arr->Length();
    char **argv = new char *[leng + 1];
    // std::cout << arr->Length() << " Lenght " << std::endl;
    for (int i = 0; i < leng; i++)
    {
        Local<String> str = arr->Get(args.GetIsolate()->GetCurrentContext(), i).ToLocalChecked().As<String>();
        argv[i] = new char[str->Length() + 1];
        str->WriteUtf8(args.GetIsolate(), argv[i]);
        argv[i][str->Length()] = '\0';
    }
    argv[leng + 1] = NULL;
    
    int res = node_encoder::encode(leng, argv);
    std::cout << res << std::endl;
    if (res < 0)
    {
        char *err_description = strerror(errno);
        std::cout << err_description << std::endl;
    }
    return;
}

void Initialize(Local<Object> exports)
{
    NODE_SET_METHOD(exports, "createHeic", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace test
