#!/bin/bash

helpFunction()
{
   echo ""
   echo "Usage: $0 -n name -a author -m media"
   echo -e "\t-n Name of book"
   echo -e "\t-a Author of book"
   echo -e "\t-m Media book was consumed in"
   exit 1 # Exit script after printing help
}

while getopts "n:a:m:" opt
do
   case "$opt" in
      n ) name="$OPTARG" ;;
      a ) author="$OPTARG" ;;
      m ) media="$OPTARG" ;;
      ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
   esac
done

# Print helpFunction in case parameters are empty
if [ -z "$name" ] || [ -z "$author" ] || [ -z "$media" ]
then
   echo "Some or all of the parameters are empty";
   helpFunction
fi

# Lower case string and add dashes
origName=$name
name=$(echo "${name}" | awk '{print tolower($0)}')
name=$(echo "${name}" | sed -e "s/ /-/g")

# Fill in template
content=$(sed -e "s/\${title}/${origName}/" \
  -e "s/\${author}/${author}/" \
  -e "s/\${date}/$(date '+%Y-%m-%d %H:%M:%S')/" \
  -e "s/\${media}/${media}/" markdown/books/_template.md)

echo "${content}" > "markdown/books/${name}.md"
