{
    "targets": [
        {
            "target_name": "native",
            "sources": [
                "src/compile/node_api.cc",
                "libheif/examples/heif_enc.cc"
            ],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")",
                "./libheif",
                "./libheif/libheif",
                "./libheif/examples",
                "-I/opt/nodejs/binding/include"
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "libraries": [
                "-L/opt/nodejs/binding/lib",
                "-lheif",
		        "-lde265",
                "-ljpeg",
                "-lx265",
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
