# median
Find the median of an array of numbers in `O(n)` _(linear)_ average time, based on [Nicolas Devillard's Fast median search: an ANSI C implementation](http://ndevilla.free.fr/median/median/src/quickselect.c)


The sort-by and quickselect approaches were compared at each size, taking the average time to run between 10 iterations.

![Benchmark Results](./benchmark-results.png)

```ts
const data = [
  { size: 1000, sortmedian_time: 0.15729179978370667, quickselectmedian_time: 0.16060419678688048 },
  { size: 11000, sortmedian_time: 1.4051167994737626, quickselectmedian_time: 0.2324874997138977 },
  { size: 21000, sortmedian_time: 2.8318624943494797, quickselectmedian_time: 0.28727909326553347 },
  { size: 31000, sortmedian_time: 4.453912296891213, quickselectmedian_time: 0.41782509684562685 },
  { size: 41000, sortmedian_time: 5.974687498807907, quickselectmedian_time: 0.49837089478969576 },
  { size: 51000, sortmedian_time: 7.539366805553437, quickselectmedian_time: 0.6556455999612808 },
  { size: 61000, sortmedian_time: 10.413429096341133, quickselectmedian_time: 0.8016708940267563 },
  { size: 71000, sortmedian_time: 11.63503729403019, quickselectmedian_time: 0.9118333041667939 },
  { size: 81000, sortmedian_time: 12.373041900992394, quickselectmedian_time: 0.9429875940084458 },
  { size: 91000, sortmedian_time: 13.940708193182946, quickselectmedian_time: 0.9697252005338669 },
  { size: 101000, sortmedian_time: 15.783950200676918, quickselectmedian_time: 1.2069248020648957 },
  { size: 111000, sortmedian_time: 17.60334580242634, quickselectmedian_time: 1.3356249004602432 },
  { size: 121000, sortmedian_time: 19.289004197716714, quickselectmedian_time: 1.254416796565056 },
  { size: 131000, sortmedian_time: 21.153220903873443, quickselectmedian_time: 1.4772251009941102 },
  { size: 141000, sortmedian_time: 22.279241600632666, quickselectmedian_time: 1.5204000025987625 },
  { size: 151000, sortmedian_time: 24.221983298659325, quickselectmedian_time: 1.7612331062555313 },
  { size: 161000, sortmedian_time: 25.84483319222927, quickselectmedian_time: 1.7666122972965241 },
  { size: 171000, sortmedian_time: 27.646908098459242, quickselectmedian_time: 1.8115079939365386 },
  { size: 181000, sortmedian_time: 29.4590666025877, quickselectmedian_time: 2.3469959080219267 },
  { size: 191000, sortmedian_time: 31.238700100779532, quickselectmedian_time: 2.1342251002788544 },
  { size: 201000, sortmedian_time: 33.23642500340939, quickselectmedian_time: 2.2990041017532348 },
  { size: 211000, sortmedian_time: 34.85212900340557, quickselectmedian_time: 2.400191602110863 },
  { size: 221000, sortmedian_time: 36.786925008893014, quickselectmedian_time: 2.570837301015854 },
  { size: 231000, sortmedian_time: 38.696179300546646, quickselectmedian_time: 2.5198749035596846 },
  { size: 241000, sortmedian_time: 40.68026669621467, quickselectmedian_time: 2.7616207003593445 },
  { size: 251000, sortmedian_time: 42.52490840256214, quickselectmedian_time: 3.0790791004896163 },
  { size: 261000, sortmedian_time: 44.38477930128575, quickselectmedian_time: 2.7095498025417326 },
  { size: 271000, sortmedian_time: 45.28637100160122, quickselectmedian_time: 2.967550092935562 },
  { size: 281000, sortmedian_time: 47.05400430560112, quickselectmedian_time: 3.346749895811081 },
  { size: 291000, sortmedian_time: 49.00597919821739, quickselectmedian_time: 3.5826707005500795 },
  { size: 301000, sortmedian_time: 50.917433401942255, quickselectmedian_time: 3.4549875020980836 },
  { size: 311000, sortmedian_time: 52.69490410089493, quickselectmedian_time: 3.421195811033249 },
  { size: 321000, sortmedian_time: 54.47397079765797, quickselectmedian_time: 3.680037495493889 },
  { size: 331000, sortmedian_time: 56.52079589664936, quickselectmedian_time: 4.305329197645188 },
  { size: 341000, sortmedian_time: 58.19764569699764, quickselectmedian_time: 3.745300194621086 },
  { size: 351000, sortmedian_time: 60.12470419704914, quickselectmedian_time: 3.462241694331169 },
  { size: 361000, sortmedian_time: 62.16247929632664, quickselectmedian_time: 4.483720999956131 },
  { size: 371000, sortmedian_time: 64.23368740081787, quickselectmedian_time: 4.1371374994516374 },
  { size: 381000, sortmedian_time: 66.09167480170727, quickselectmedian_time: 4.158212596178055 },
  { size: 391000, sortmedian_time: 67.87783330976963, quickselectmedian_time: 4.4906459033489226 },
  { size: 401000, sortmedian_time: 69.66407490372657, quickselectmedian_time: 4.62877060174942 },
  { size: 411000, sortmedian_time: 71.74544169902802, quickselectmedian_time: 5.0459498971700665 },
  { size: 421000, sortmedian_time: 73.76111669540406, quickselectmedian_time: 4.655983397364617 },
  { size: 431000, sortmedian_time: 75.2367833942175, quickselectmedian_time: 4.849446001648903 },
  { size: 441000, sortmedian_time: 77.38711249828339, quickselectmedian_time: 5.175033298134804 },
  { size: 451000, sortmedian_time: 79.45789570212364, quickselectmedian_time: 5.556154200434685 },
  { size: 461000, sortmedian_time: 81.65827090144157, quickselectmedian_time: 5.239208200573922 },
  { size: 471000, sortmedian_time: 83.14912500083446, quickselectmedian_time: 5.986199998855591 },
  { size: 481000, sortmedian_time: 85.16240000128747, quickselectmedian_time: 5.183879297971726 },
  { size: 491000, sortmedian_time: 87.39130420088767, quickselectmedian_time: 6.09579990208149 },
  { size: 501000, sortmedian_time: 90.44928770065307, quickselectmedian_time: 5.184583401679992 },
  { size: 511000, sortmedian_time: 92.10472069978714, quickselectmedian_time: 6.1836083114147185 },
  { size: 521000, sortmedian_time: 94.33035441040992, quickselectmedian_time: 5.415666803717613 },
  { size: 531000, sortmedian_time: 94.1245415955782, quickselectmedian_time: 5.575791597366333 },
  { size: 541000, sortmedian_time: 95.45012909770011, quickselectmedian_time: 6.1103918045759205 },
  { size: 551000, sortmedian_time: 97.75722090303898, quickselectmedian_time: 6.340549904108047 },
  { size: 561000, sortmedian_time: 99.65407910048961, quickselectmedian_time: 6.486954402923584 },
  { size: 571000, sortmedian_time: 101.97977079749107, quickselectmedian_time: 6.690983298420906 },
  { size: 581000, sortmedian_time: 103.69311260282993, quickselectmedian_time: 6.410320803523064 },
  { size: 591000, sortmedian_time: 106.72183749973775, quickselectmedian_time: 6.8444331109523775 },
  { size: 601000, sortmedian_time: 107.88630410730839, quickselectmedian_time: 6.73851660490036 },
  { size: 611000, sortmedian_time: 110.10263309776784, quickselectmedian_time: 6.952725103497505 },
  { size: 621000, sortmedian_time: 111.8728541970253, quickselectmedian_time: 7.090870895981789 },
  { size: 631000, sortmedian_time: 113.47748349905014, quickselectmedian_time: 7.576241692900657 },
  { size: 641000, sortmedian_time: 115.6631207048893, quickselectmedian_time: 6.866562494635582 },
  { size: 651000, sortmedian_time: 117.61130009889602, quickselectmedian_time: 7.958791697025299 },
  { size: 661000, sortmedian_time: 119.65346259176731, quickselectmedian_time: 7.605108398199081 },
  { size: 671000, sortmedian_time: 121.7426873922348, quickselectmedian_time: 7.902978900074959 },
  { size: 681000, sortmedian_time: 123.49960429668427, quickselectmedian_time: 7.837462493777275 },
  { size: 691000, sortmedian_time: 125.60598340034485, quickselectmedian_time: 7.922908300161362 },
  { size: 701000, sortmedian_time: 128.33167099058628, quickselectmedian_time: 8.246579107642173 },
  { size: 711000, sortmedian_time: 129.80399580299854, quickselectmedian_time: 9.332891601324082 },
  { size: 721000, sortmedian_time: 131.7875709056854, quickselectmedian_time: 7.682300099730492 },
  { size: 731000, sortmedian_time: 133.42290829718112, quickselectmedian_time: 8.724824902415275 },
  { size: 741000, sortmedian_time: 135.4885708987713, quickselectmedian_time: 7.784254205226898 },
  { size: 751000, sortmedian_time: 138.09130809605122, quickselectmedian_time: 8.691508197784424 },
  { size: 761000, sortmedian_time: 139.51176649928092, quickselectmedian_time: 8.799737599492072 },
  { size: 771000, sortmedian_time: 141.61353739798068, quickselectmedian_time: 8.509762600064278 },
  { size: 781000, sortmedian_time: 143.68081670105457, quickselectmedian_time: 9.070566898584365 },
  { size: 791000, sortmedian_time: 145.96639579832555, quickselectmedian_time: 9.588370895385742 },
  { size: 801000, sortmedian_time: 147.81732509434224, quickselectmedian_time: 9.299554204940796 },
  { size: 811000, sortmedian_time: 150.32102069854736, quickselectmedian_time: 9.5019710034132 },
  { size: 821000, sortmedian_time: 151.930233207345, quickselectmedian_time: 9.060770902037621 },
  { size: 831000, sortmedian_time: 154.00565409958364, quickselectmedian_time: 9.941208398342132 },
  { size: 841000, sortmedian_time: 155.69729159772396, quickselectmedian_time: 9.712745800614357 },
  { size: 851000, sortmedian_time: 158.1494166046381, quickselectmedian_time: 10.052787399291992 },
  { size: 861000, sortmedian_time: 159.96699600219728, quickselectmedian_time: 10.015829104185105 },
  { size: 871000, sortmedian_time: 161.9749210000038, quickselectmedian_time: 10.680766800045967 },
  { size: 881000, sortmedian_time: 164.26917919516563, quickselectmedian_time: 10.632137393951416 },
  { size: 891000, sortmedian_time: 166.38947909772395, quickselectmedian_time: 10.820141804218292 },
  { size: 901000, sortmedian_time: 168.52540010511876, quickselectmedian_time: 10.500453898310662 },
  { size: 911000, sortmedian_time: 169.92162939608096, quickselectmedian_time: 11.361328902840615 },
  { size: 921000, sortmedian_time: 171.91456679999828, quickselectmedian_time: 10.88915400505066 },
  { size: 931000, sortmedian_time: 174.24405000209808, quickselectmedian_time: 11.225233295559883 },
  { size: 941000, sortmedian_time: 175.9563456982374, quickselectmedian_time: 10.62595430314541 },
  { size: 951000, sortmedian_time: 179.71739159822465, quickselectmedian_time: 11.299049997329712 },
  { size: 961000, sortmedian_time: 180.07477909624578, quickselectmedian_time: 10.154270899295806 },
  { size: 971000, sortmedian_time: 182.76629999876022, quickselectmedian_time: 9.671500000357629 },
  { size: 981000, sortmedian_time: 184.73077919781207, quickselectmedian_time: 11.776158306002618 },
  { size: 991000, sortmedian_time: 186.24745809733867, quickselectmedian_time: 11.941533103585243 },
  { size: 1001000, sortmedian_time: 188.46442499756813, quickselectmedian_time: 11.302287501096725 },
];
```
