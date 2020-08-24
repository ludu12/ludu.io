#!/bin/bash

helpFunction()
{
   echo ""
   echo "Usage: $0 -t Title of post"
   echo -e "\t-s Summary of post"
   exit 1 # Exit script after printing help
}

while getopts "t:s:" opt
do
   case "$opt" in
      t ) title="$OPTARG" ;;
      s ) summary="$OPTARG" ;;
      ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
   esac
done

# Print helpFunction in case parameters are empty
if [ -z "$title" ] || [ -z "$summary" ]
then
   echo "Some or all of the parameters are empty";
   helpFunction
fi

# Lower case string and add dashes
origTitle=$title 
title=$(echo "${title}" | awk '{print tolower($0)}')
title=$(echo "${title}" | sed -e "s/ /-/g")

# Fill in template
content=$(sed -e "s/\${title}/${origTitle}/" \
  -e "s/\${date}/$(date '+%Y-%m-%d %H:%M:%S')/" \
  -e "s/\${summary}/${summary}/" markdown/posts/_template.md)

echo "${content}" > "markdown/posts/${title}.md"
