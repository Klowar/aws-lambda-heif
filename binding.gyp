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
                "-L/usr/local/lib"
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "libraries": [
                "-L/opt/nodejs/binding/lib/libheif.so",
                "-L./libheif/libheif/.libs/libheif_la-bitstream.o",
                "-L./libheif/libheif/.libs/libheif_la-box.o",
                "-L./libheif/libheif/.libs/libheif_la-error.o",
                "-L./libheif/libheif/.libs/libheif_la-heif.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_avif.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_colorconversion.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_context.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_decoder_libde265.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_encoder_x265.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_file.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_hevc.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_image.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_plugin.o",
                "-L./libheif/libheif/.libs/libheif_la-heif_plugin_registry.o",
                "-L./libheif/libheif/.libs/libheif_la-nclx.o",
                "-L./libheif/examples/heif_enc-heif_enc.o",
                "-L./libheif/examples/heif_convert-encoder.o",
                "-L./libheif/examples/heif_convert-encoder_jpeg.o",
                "-L./libheif/examples/heif_convert-encoder_y4m.o",
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
