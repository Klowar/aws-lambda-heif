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
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif.a",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-bitstream.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-box.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-error.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_avif.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_colorconversion.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_context.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_decoder_libde265.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_encoder_x265.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_file.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_hevc.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_image.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_plugin.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-heif_plugin_registry.o",
                "/home/ec2-user/aws-lambda-heif/libheif/libheif/.libs/libheif_la-nclx.o",
                "/home/ec2-user/aws-lambda-heif/libheif/examples/heif_enc-heif_enc.o",
                "/home/ec2-user/aws-lambda-heif/libheif/examples/heif_convert-encoder.o",
                "/home/ec2-user/aws-lambda-heif/libheif/examples/heif_convert-encoder_jpeg.o",
                "/home/ec2-user/aws-lambda-heif/libheif/examples/heif_convert-encoder_y4m.o",
                "/usr/local/lib/libjpeg.so"
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
