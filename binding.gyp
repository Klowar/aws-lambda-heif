{
    "targets": [
        {
            "target_name": "native",
            "sources": [
                "src/compile/node_api.cc"
            ],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")",
                "./libheif",
                "./libheif/libheif",
                "./libheif/examples",
                "-I/usr/local/include",
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "libraries": [
                "-L/opt/nodejs/binding/lib/libheif.so",
		"-L/opt/nodejs/binding/lib/libde265.so",
                "-L/opt/nodejs/binding/lib/libjpeg.so"
            ],
            "variables": {
                "X265_VERSION": "2.7",
                "LIBDE265_VERSION": "1.0.3"
            },
            "cflags!": ["-fno-exceptions", "-no-pie", "-v", "--no-fail-fast"],
            "cflags_cc!": ["-fno-exceptions", "-no-pie"],
            "defines": ["NAPI_CPP_EXCEPTIONS"]
        }
    ]
}
