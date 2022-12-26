#! /usr/bin/bash

outputPath="../static/gallery"
path="$outputPath/*"
# counter=1


# for f in $path
# do
#     imageName="$f"
#     arrIN=(${f//./ })
#     x=${arrIN[0]}
#     mv "$f" "..$x.jpeg"
#     # echo "$x.webp"
#     # echo "$f"
    # echo "$f" >> file.txt
# done


# cwebp -q 80 "$imagePath" -o "$x".webp



for f in $path
do
    # echo "$f"
    arrIN=(${f//./ })
    x=${arrIN[0]}
    cwebp -q 80 "$f" -o "..$x.webp"
    # echo "$x.webp"
done

