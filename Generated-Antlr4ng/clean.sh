# Generated from trgen 0.23.8
rm -f *.interp
files=()
files+=( `java -jar "C:/Users/Kenne/.m2/antlr4-4.13.1-complete.jar" -depend -encoding utf-8 -Dlanguage=TypeScript   X.g4 | awk '{print $1}' | grep -v ':'` )
files+=( `java -jar "C:/Users/Kenne/.m2/antlr4-4.13.1-complete.jar" -depend -encoding utf-8 -Dlanguage=TypeScript   X.g4 | awk '{print $1}' | grep -v ':'` )

for i in ${files[*]}
do
    rm -f $i
done
rm -rf node_modules package-lock.json
exit 0
