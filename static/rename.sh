#! /usr/bin/bash


path="./gallery/*"
couter=0


for f in $path
do
  ((counter++))
  echo $f
  # mv ./$f "$counter.jpeg"
done
