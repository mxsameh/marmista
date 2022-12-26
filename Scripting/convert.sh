#! /usr/bin/bash

outputPath="../static/products"
path="$outputPath/*"
imagePath="$outputPath/marmara.jpeg"
# counter=1


# for f in $path
# do
#     imageName="$f"
#     arrIN=(${f//./ })
#     x=${arrIN[0]}
#     mv "$f" "..$x.jpeg"
#     # echo "$x.webp"
#     # echo "$f"
# done


# cwebp -q 80 "$imagePath" -o "$x".webp



for f in $path
do
    echo "$f" >> file.txt
    # arrIN=(${f//./ })
    # x=${arrIN[0]}
    # cwebp -q 80 "$f" -o "..$x.webp"
    # echo "$x.webp"
#     # ((counter++))
done

