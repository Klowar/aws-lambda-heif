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
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif.a",
                "/Users/klowar/work_directory/heic_image_server/libheif/config.h.in",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/heif_version.h.in",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-bitstream.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-box.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-error.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_avif.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_colorconversion.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_context.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_decoder_aom.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_decoder_libde265.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_encoder_aom.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_encoder_x265.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_file.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_hevc.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_image.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_plugin.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-heif_plugin_registry.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif_la-nclx.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/libheif/.libs/libheif.1.dylib",
                "/Users/klowar/work_directory/heic_image_server/libheif/examples/heif_enc-heif_enc.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/examples/heif_convert-encoder.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/examples/heif_convert-encoder_png.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/examples/heif_convert-encoder_jpeg.o",
                "/Users/klowar/work_directory/heic_image_server/libheif/examples/heif_convert-encoder_y4m.o",
                "/usr/local/lib/libjpeg.a"
            ],
            "variables": {
                "X265_VERSION": "2.7",
                "LIBDE265_VERSION": "1.0.3"
            },
            "cflags!": ["-fno-exceptions", "-v"],
            "cflags_cc!": ["-fno-exceptions"],
            "defines": ["NAPI_CPP_EXCEPTIONS"]
        }
    ]
}
