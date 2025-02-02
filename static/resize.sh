#!/bin/bash
width=$(vipsheader -f width $1)
height=$(vipsheader -f height $1)
size=$((width > height ? width : height))
factor=$(bc <<<"scale=10; 32768 / $size")
vips resize $1 $2 $factor
