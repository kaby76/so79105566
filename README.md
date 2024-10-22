# so79105566

```
$ bash run.sh -input '$aa.bb(' -tokens
+ exec npx tsx Test.js -input '$aa.bb(' -tokens
[@0,0:2='$aa',<2>,1:0]
[@1,3:3='.',<4>,1:3]
[@2,4:5='bb',<3>,1:4]
[@3,6:6='(',<5>,1:6]
[@4,7:6='<EOF>',<-1>,1:7]
TypeScript 0 string0 success 0.002
Total Time: 0.01
10/22-07:28:21 ~/temp2/Generated-Antlr4ng
$ bash run.sh -input '$aa.bb ' -tokens
+ exec npx tsx Test.js -input '$aa.bb ' -tokens
[@0,0:5='$aa.bb',<1>,1:0]
[@1,7:6='<EOF>',<-1>,1:7]
TypeScript 0 string0 success 0.001
Total Time: 0.01
10/22-07:28:31 ~/temp2/Generated-Antlr4ng
```
