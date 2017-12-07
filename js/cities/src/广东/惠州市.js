(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('惠州', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441302","properties":{"name":"惠城区","cp":[114.382474,23.084137],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAGK@AGEA@CAAA@@C@@@AA@C@AA@A@@@A@AB@@A@ECA@@A@@EDBB@BAB@@A@E@@@@AA@A@@@@@@B@BABA@A@AB@@C@A@@@@@C@EBA@ABADCDAF@@AA@C@@AA@@@@@@A@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@CB@@@B@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@BBB@@BBB@BB@AD@@D@FB@BB@BB@@CDBBB@BBAB@BBBBDBDBD@BBD@DBBABB@@AB@DAFCFCDA@BAFADA@@@@B@@@BCAA@ABCDABBBABADKJA@@@@@@@CD@@@@CBA@@F@HHBNLLHBFBFFPFPHDPDTBB@@@HBD@HBNJJL@@B@BB@@LTHFNFFBBBF@FBH@DABA@@BAB@D@BB@@DAD@@B@BB@B@B@BB@BDBB@B@BA@BD@B@B@FBD@B@B@FDBCD@BABA@A@ABABBB@BAFB@@BB@ADB@AB@DABBB@B@@BD@DBB@D@BB@@BB@BD@@@BBBAB@@BBB@@BB@@@B@BB@@B@B@BB@B@@@@@B@@ABB@@BB@@B@@@@@@B@@B@@B@@@@BB@@@@@B@@@B@@A@@B@@BBA@@B@@@@@B@@BB@@@AB@B@B@@AB@B@@@@B@BB@@B@BAB@@@B@@BBBB@@A@@B@@A@@B@@@BB@@@AB@@@@BB@@BB@@BB@@@B@B@B@@@@@@D@D@@@DADAFAB@F@@@@@B@@@@BBB@@BB@@@BB@@@@B@@@BB@@@@@B@B@@@@@@B@@@BB@@B@@BB@@@B@@@BB@@BB@@@BB@@@B@@B@@BB@B@@@B@@@B@@@B@@@B@BA@BA@@BA@@B@@B@@BA@AB@BAB@@AB@@AB@BB@@@BA@@BBB@@@@BDB@A@@B@B@DA@@BBBBAB@@CF@BAB@B@B@@@@@B@B@BBD@BB@@@B@@BD@@@B@@@B@@@@@@@B@@@BAB@B@B@B@@@@@@@@@@B@B@@@@@@@B@B@@@@A@A@@@A@A@@@A@A@@FFHFBFBB@@@DB@BBBB@@BBB@@B@BAB@B@B@BAB@BBBBDBB@D@@@B@@A@@@A@@B@BAB@@@@A@A@@@A@A@@@ABB@@BAB@@@B@B@BB@@BA@@B@BA@@@@@AB@@@B@@A@@BBB@@@BB@B@@@@@B@@BBB@@AD@@AB@@@@@BB@B@@@@@BB@B@B@B@B@@@B@B@@A@@B@B@B@@A@@@AB@@@@@@A@@@A@A@A@@D@@@BB@@@@B@@@B@B@@BBB@@B@BA@@B@BB@BA@@B@@BDB@@@BB@@@BB@@BBB@@B@B@B@@AB@@@BB@@@BDBBB@@@@@BA@@B@BB@@@@BAB@@A@@B@@BB@@@BB@B@@@@@BAB@B@@@B@@@B@@@@B@@@@@@@BB@@@B@@@@@B@@B@@@BB@@BB@@BAB@@@B@B@@@B@@ABA@@@@@@B@@@@@@AB@@@@@B@@@B@@@B@@BB@@@@B@@AB@@A@@@A@@BA@@@AD@BB@@D@@B@B@@@B@@@B@@B@@@B@@@@BB@@B@B@BB@@B@B@@ABB@@B@B@B@@@BB@BB@B@B@@@BBB@BBB@@@@BB@BB@B@@B@BB@@BB@BBBB@@B@B@BB@@B@@BBBD@DBBAB@FAD@BABA@AD@DCDE@E@A@ABAB@B@@ADABA@ADAB@B@@@@BB@B@BBHBFDBAB@DBBBB@BBBDB@B@BBBABB@AD@BBBA@@DADBBB@BDA@B@B@@DB@BD@@BD@@@B@BBBBD@B@D@DBB@B@D@@BBB@B@BB@DBBAB@BBB@F@B@ABCB@@EDKFEDGFMLABKLGHABGLADCF@J@B@BCDADCJADABABA@AAEACCCCCCA@AAEDABAFBDBJBD@FBDBF@@@FBL@BBL@DBD@DFDHHLNLJBBDDBBBBDBBDFFDBFHBBFDH@HABAFEDEHKBAFGFEFAF@B@FBHFRJFDDDBFBJ@FAFAF@BBDDDHBJAL@L@HBHBBE@AD@BAAC@@BABBB@BAD@@@@E@@DCB@D@DAB@DAB@@B@DABAD@B@BBD@DBB@BBBB@@@B@BCD@@AB@B@@ABA@A@AAABABBD@DD@B@BBB@BBBDABBB@BBD@BABDB@DBBABAF@@BDBB@HCDABABADCH@D@DADAD@@AA@CAE@@ACCA@@@CA@A@AA@A@ACACBAFADADABE@ACA@@@CBADAAC@AAABABCAA@AB@B@B@BCCCA@C@A@AAA@@ADCD@FABBB@BB@ABAB@B@BED@DBDAB@DA@A@ICEAAAA@CBAD@@CB@BABAB@AA@CBABB@BB@DA@C@A@@@E@@BCACBA@BBBBA@BBBB@BBBBBDB@@ADA@AAA@A@ABABADDFBFBBADCDBB@D@@@BAACBAHABA@A@AB@BE@AACD@FA@@B@BB@BB@B@BABAF@DA@AAA@ABA@ABCBAA@AA@ADAD@DAAA@CCC@CA@A@@CAAECAACCBACI@AA@@CDEDAB@BBDBDA@@@AAEAABABCBADA@@B@B@BBD@BA@@BAAAAC@C@ABAAADCB@BCBC@C@A@CBA@C@CBACA@AABCAAAAA@@ACBA@ABAAA@A@AAAACA@AAABA@A@@DE@EBE@CBCACACAAACAC@@DCBCA@BABAAC@ADABAAACC@@DED@@A@EACAC@EAAB@@CA@C@@@AAACACCACAE@CAAGEIEEEE@EAE@@A@@AAAA@@C@A@B@@AAC@CAAAAAAAI@AAA@EDA@C@A@CECBAAE@CAAACCACACAE@C@@AAC@A@ADA@@AAACAAABA@A@C@EACBAAC@@B@BABC@C@A@AABE@AAAB@ACBA@@AAA@CAAAA@AAAA@A@CAAAAA@AABADC@ABA@ABAAA@@A@A@AAA@EA@@ABCCABAACBAAAAABABCAC@A@C@A@A@CBCB@@A@A@AAAAACCBAACABAE@A@CB@B@DCBABA@EHCBCB@@@ACBCBAAA@C@@@@@@@AA@AACA@CAAAAAA@A@ACAACAAA@@A@@AB@B@@@B@@A@ABA@A@@D@@@@B@@@@@AB@@AB@@BB@B@CG@A@ECABQ@EC@BAACAEBCEAE@ECG@@A@EBCBGCCCIGEEAABCBGBAB@@CAEEAEAC@ECCBI@ABC@E@ABA@E@EDADEBAC@@CGA@GCA@@BABAAAAACGCACAAECCABA@AACCC@AAACDA@AACC@EFABA@AKA@@A@@AA@D@@A@AAA@@B@@@B@B@@A@@@ABAA@A@@@@@@AA@@@@A@@@C@@@A@@@A@@@@@AC@@B@@@@@B@B@BBB@@AB@@@BA@@@AB@BBB@@@B@@@@AA@@ACA@@@@@@@A@@BAB@@@@C@C@C@@AAA@A@A@@AA@@AAAACAAACCC@@@AA@@@@@@@@@@A@@AA@C@AAAA@A@A@AAAAA@CBA@@@@@@@@@@@@@@A@@@@ABA@@AAAA@@AA@@AA@@B@@@A@A@@AAAC@@@@A@@@@@A@A@@@AA@ABC@@A@@@@@@@@@@@@@A@ABA@AA@A@@C@@@@@BAB@@@@ACAAAA@C@A@@A@@BA@@@@@A@ABA@AABA@CB@AGA@@CB@@@BAB@B@@ABC@CD@B@@@BA@C@CBA@@@C@@@@BAB@@A@A@@B@@@@BB@@@B@B@@@BA@@B@B@B@@C@A@@@@BA@@@CAAA@@@@A@A@C@C@CA@@ABA@@B@@@@ABAAA@CA@AA@C@C@@B@B@@@@@@@B@@A@@@@@@@@F@B@B@@@@CB@@@B@B@@BB@@@B@@@B@BAB@B@DB@@BBB@@@BA@AA@@AB@@AB@B@@A@C@C@@B@@@B@B@B@B@BAB@@@B@@ABA@@B@BB@@B@@@BAB@@AB@@AAA@CB@@A@A@AAA@A@A@A@AAC@A@AAAB@@ABAAA@@B@BCB@@@D@B@@AB@B@B@@BD@BADAD@B@BB@@BB@@DA@@@@@AAA@AB@AAAA@A@CBA@AAAC@@A@@@@B@@@B@@AAA@A@A@@BAAAAA@@AB@AA@@A@@C@ABA@@AAA@AB@B@B@@@@ABA@BA@A@CA@A@AC@A@@A@AA@AAABAEB@BAA@A@@C@CA@B@@@AA@@A@@A@@AAA@@AA@@AA@A@@@AAC@@A@AD@B@@A@@@@A@@@@DCA@@AAAA@@@C@@AC@G@@C@@@@@AAAAAA@ABABA@@@AACBA@@@AA@@AAAA@A@@@AAC@@BCBA@@DDB@AC@CAA@@BAFB@@AA@A@A@AB@@BB@B@BBDA@@B@@@@@@@B@@A@@A@A@@@@@@@@@A@@@A@@@@@@AB@@A@@@@@@@@@@@@@@@@@@@@B@@@@@B@AA@@@ABABAB@@@@@AA@@@@@@@@@@ABCB@@@@@@@@@@@@@@@@@B@@AB@@@@@@@@@@@@@@@@@@@@@@AB@@@@@B@@@@@B@@@@@@A@@AC@@@ADA@CB@BA@@BBBA@@@AA@@AABAA@@@A@@@A@@BAB@@@@ADA@ABC@@@@@@D@BAB@@AAAAA@@AA@ABCBAABAA@@@CAA@A@@A@@@A@@CAABA@@@@@A@A@AA@@A@AA@@@A@C@@@@@@BA@@AA@@AB@@@@@@AB@@@AA@A@A@@@@@G@@A@A@CBA@@@@@@EA@C@@@@@@@@@@@@@A@@@@@@AA@B@@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@@@@@@@A@@@A@@BA@@A@AC@@A@C@CI@A@ACCAA@AA@AAA@AA@@@A@EA@@A@A@A@A@A@A@@@CBAA@@A@@AAA@@AAAA@AA@AA@ABEA@BA@@@@@A@ACAA@@CC@A@C@AG@A@A@CBA@AB@BABAB@@CBCBAB@DA@ABCBABABAB@B@@@B@@@B@DAJ@@AD@B@B@DBB@@@@@@@@B@B@@@B@@B@BAB@@AD@B@@@@@@AB@B@@@@A@@@C@A@@B@@A@@B@@J@@@@B@@DBBB@BD@DD@BB@@@D@@@@@@@DBB@AF@B@@@@@@@BBB@B@@@@@@@@@@@@@B@@@@@@@@@@AB@@BDABA@@@@BBBAB@@@@BBAD@@A@A@@@AB@@C@@B@BCF@@A@ABA@CAAB@@EAEB@AE@C@@@@BC@@@@BB@BB@@@BCB@AA@A@ABCCGDABA@@@A@AF@@@BA@@@"],"encodeOffsets":[[116924,23549]]}},{"type":"Feature","id":"441322","properties":{"name":"博罗县","cp":[114.289528,23.172771],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AEAEKGMKGAEAE@CBEDQHABA@IHABABCDABAHCF@@CJAD@RAF@BAHCDEBC@G@@@GBCB@@MDOAA@MEMGCAGECAKGIAAAE@C@I@ABE@CBA@ADCBCBCBA@GDCBKPADCBABCDCBABABCB@@CBGFA@C@@@A@C@C@A@@@@@A@A@CA@@A@AAA@A@A@CAE@A@AA@@@@C@KCEAGBKDA@C@IDEBEBCBE@A@I@IEAA@D@DCBE@A@CBA@CBEDABABABABABA@A@AAAAAAAAAA@@AAAA@@CCAAC@A@A@C@AB@@A@C@@BA@C@A@A@C@@@@B@@@F@BAFCBA@@F@BDFADBBBDBFBB@@AF@B@BBB@B@@BBFDFBBFDFFBJ@B@DDBD@@BBBBDBD@J@BAH@FAD@LDBDDBDJ@FGDIAGBCHCH@B@D@B@@A@@@@B@@@B@@@B@@@BB@@B@B@@@B@B@@BB@BBB@@BB@B@@HDBFBJ@@HAJ@BB@FBDAFEBCFEJ@DA@@@CNEHBJDBBDBH@BABABA@ABC@ABA@ABA@@BABA@ABABA@A@A@@BA@@@A@@B@@@BBB@@BB@BB@BBBBB@BB@BDB@BBB@BBB@BBB@BBBBBBH@BEF@DDBBH@B@BBJBDDF@B@J@BBBBB@B@BB@@@@B@@@@A@@@A@@@@@A@A@@B@@A@@D@BADCB@BAB@B@B@B@@@B@B@@BBBB@BBBBB@DBB@BBBBB@@B@BBD@DBB@D@BABABAD@@AB@B@@@LALAHAFB@@JBHBFEJGB@D@B@DABAD@DABAB@@A@AB@@GBCCKAGDADCLCNGDA@EBAH@FAHCD@D@B@B@BAB@AF@B@D@D@@BHGHAF@BEF@J@B@DA@ABABA@AB@B@@@B@@B@@@BAB@B@@@B@BB@@@BH@DDBDBBDF@@BBBB@@@B@@@@HAB@DAFAD@D@F@DAFAFABCDAFCFAFBHBBDBBCDAD@H@HBD@DFFDFDDBF@BABAF@HBD@F@BABA@A@AB@BA@BB@@BB@@@B@DDBB@DB@@BD@D@HBHBDDDDDDDBBHBHBD@DBF@F@BAD@DBBBB@BHBFBD@BDDBDDBFBD@PIBADAD@BDNJJHNDD@F@FHBBDAD@B@DB@@DAH@DAD@BDAB@FD@@DHLB@DDBADADAB@BAHBDFFF@JD@LLBBB@BBFGNFDDHDHD@@DDJ@DADCDCDABAD@D@BA@@BC@CDCNAB@DEFC@KAGBAF@B@DBB@F@DBDDDH@N@FFBJFDFDAFFFFHBBLFLFFDLAD@BBDFHJFH@BDDD@DBB@@D@JB@D@DBBDDDB@@@R@BDFBDDDDNFFHFDAF@AFDFBBBB@B@BCB@HDB@B@@ALDFB@H@FAFDFB@F@BDD@D@F@BDFBDFHB@DB@BB@@HBDF@HBFAHDBFAFCA@DBFDHDA@EFAB@@EF@B@B@BFF@FDBDB@GPCN@HADAD@DEHFFBFE@I@EDGAAA@@C@@AA@A@C@AD@B@BCBABC@A@CD@H@DBD@@HH@@DDDFDBFBP@@DBDLAJ@BEBBBD@D@BBBF@BBDABBHDDHDD@BAF@BFFD@DF@ABC@A@A@CBC@CAA@C@AFB@@DABDHGB@DCDAB@B@HBDBBBDDBBB@HDHBFBHDDBLFHAFAFBBCBADAF@BBFADCBABAB@H@BABAFCFAD@B@AABCDEBABABGCCBCFK@@F@DBFADCB@@E@CDCBCJM@KBGDC@CBABABABED@FGDBDE@CFA@G@CAC@@@GAA@A@@AACACCFAACB@BCFG@@AA@AAAAC@AFADEDCBEF@BAB@BAAC@IBCFEDEHABABCDBBBDBBAB@BC@AD@DAB@DAJADCB@BCB@BA@A@@@@B@FEBABA@@@ABA@GC@A@AC@C@@DADCFADABA@@FCD@D@BBDD@B@@ABCACBDB@FB@@BAHABDDAD@B@@DBDAD@DAFBBADBAFDBBF@B@@D@DD@BFBBBBCDBBDD@DBB@DI@EBEBK@K@CDEFCBAHCHAH@F@DBNDF@DABAFEBC@@BCAEEE@AEE@@GCCCACCEAIAIBCDGDKBA@@HIHIDC@@BABGAGCCKCEAC@EAA@GAA@A@EEMIGISWU]IGCAG@GAGAK@K@IBGACCAC@ABEBE@EAIAECCECQIGEEAA@E@EBEFEHABGLCFEFABGBG@ECAAEGCAEEACCAAAAACCAAKIKMGGEC@CAC@CAK@AAK@E@@AEAC@EACAIACBEBAFCBBB@DDDDDDFBBBB@BABABCDIBCDC@A@A@IDEBCHKBAHGLKBANKHEFCLEFC@@DABAA@E@A@AAA@ABCAA@@A@AAA@AC@A@A@CAC@A@C@AAAAA@@@C@@AC@@ACA@@@A@ACB@AAACACB@@ABAAC@@BAAABAAA@A@ACAAA@AACAA@ABECGAAAA@A@@A@@A@A@CB@BABCB@BA@A@AB@B@B@FCFCDC@@BABABC@EBA@ABCAC@AA@AA@@@AAA@A@@@AAAAA@@AA@@A@AA@A@@AAA@@@@AA@AAA@A@@@A@AAAA@@A@@@A@A@AA@BA@@@A@AA@@A@A@AA@@A@@A@@@A@@@@A@@@A@@@A@AC@@@AAC@@B@@AB@@@B@@@BA@@BA@@@@@AA@@@A@@@A@@@A@@@@BA@@@@@@@A@@@@B@BA@@@A@@@A@A@@BA@AA@@AA@@A@@@AA@@@@@A@@@A@@A@@@@@@@A@@A@@@A@@@A@A@AB@@@@A@A@@A@@AA@@@AB@@@BA@A@@A@@A@AB@@A@@@@AACA@A@@AA@@A@@BA@A@A@@@AA@AA@@A@@AA@@A@AC@@@AB@@AAAA@@@ABA@@@AA@AA@A@@@A@@@@@AA@@C@@@@B@B@B@@@B@@@@A@@B@@@BA@A@A@@@@BA@A@@@A@A@A@A@A@@A@@@@@AAA@@@@A@@BC@@BA@AA@@@A@@@@@AAA@@A@AA@@@BA@@@A@@B@@@@ABA@@@AB@@AAA@A@@@A@AB@@AA@B@@@B@B@@@B@B@@A@ABA@@@@B@@@BA@@@C@A@CAAAAAA@ABA@A@A@ABA@@@AA@AA@AA@ACA@@A@EAEAEG@EB@B@@@B@B@@@B@B@@@@@@A@A@@@@@@@A@A@@@@@@@@A@A@A@A@AB@@A@@@@@@@A@@@A@@@C@@AA@@@A@@AAC@A@A@A@@@@@A@ABA@ADE@@BAAAAA@@CBA@A@@@@BCA@A@@A@AA@@AB@@A@@ABA@@BA@@BA@ABAB@@AA@@@@AB@@AB@@AABA@@@A@@@A@@@A@@@A@A@@AA@@@@A@@AA@@A@@AA@@A@@@A@@AA@@@AA@@A@@@A@@@@A@A@@@@@A@@A@@@A@@A@@A@@AA@@AA@A@@A@@@@@E@A@EBCBCB@@C@C@@@@@@@@A@A@A@@AA@@AA@@AA@@@@BA@@A@@A@@@AB@@@@AB@@@AAAA@@@A@@BA@A@AA@@A@A@@A@A@@BA@A@A@@B@@AA@@@A@@@@@AB@AA@@@AB@@@@A@@@A@@@@AA@@@@@AA@@@@A@@@@A@@@AA@@AA@BA@@@@@A@A@@A@A@AA@@A@A@@AA@@AA@AA@ABAA@@C@@AAA@@AAC@A@CAC@@AA@A@AACBA@@BCA@BAA@@EAABA@AAAB@B@BABABC@ADECA@A@C@EAA@A@C@@AABA@A@CA@AAAA@A@A@@A@AC@CB@@AAC@A@AB@@ABCBG@EAE@AAEAMEGEKS@@AAA@@@IKMIGAC@GA@@A@SAOCGCEOEO"],"encodeOffsets":[[116887,23619]]}},{"type":"Feature","id":"441303","properties":{"name":"惠阳区","cp":[114.456176,22.789788],"childNum":28},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@BA@@@@@@@@@@@A@@A@@@A@@@@@@@@BB@@@@@@@@B@@"],["@@BA@@@@@@@@@@@@A@@@@@@@AB@@@@A@@B@@B@@@@@B@@A"],["@@B@@@@@@@@@@A@C@@@BA@@B@@@B@@@@"],["@@@@@@@@@BB@@@@@@@BA@@@@@A@@@@@@@@@@A@@@@@@@AB"],["@@@B@@@BB@@@B@@A@@AA@@@@A@@@"],["@@A@A@@B@@BBBA@@B@@@@@@AA@@@@@"],["@@@@@A@@@@@@A@@@A@@@@@@B@@@@@B@@@@@@@@B@BA@@"],["@@@A@@A@@@@@A@@@AB@B@@@@B@@@B@B@@A"],["@@@@BA@@@@@A@@@@@A@@A@A@@@@B@@@@A@@@BB@@@@@@B@AB@@@@@@@@B@"],["@@B@@@B@@@@@@A@@@@@@@@@A@@@@A@@@A@@@@BA@@B@@B@@@@@@@"],["@@@@@@BAA@@A@@AAA@@@@B@@@@@@AB@@@BB@@@B@@@B@"],["@@@@@@B@@@B@@A@AA@A@@AABA@@@@B@@@BB@@@@@@@B@@@@@"],["@@@B@@@B@@@@B@@A@@B@@@@@B@@@BA@A@@A@@@@@@@AA@@@BA@@@AB@@"],["@@B@@@@@BAA@B@@A@@AA@@@@A@@@ABA@@B@@A@@B@@@@@@B@B@@@B@"],["@@@@ABB@@@@BB@@@B@@BB@@@@@B@@@@@@@B@@@@@@A@@@@A@@@AAA@AA@@A@"],["@@@@B@B@@@B@@@@@B@B@@A@@@@@AA@B@@AA@@@@@A@@@@@@@A@@@A@@B@@A@@@@@@@A@@@@B@@@B@@@@@@B@"],["@@@@@@BB@@@@BA@@@@@@@@@@@@BA@@@@@@@AAA@AA@A@@A@@A@@B@@@@A@@@@B@@@@@@@B@@BB@@@@@@BB"],["@@@BBBB@@@B@B@@@D@@@B@B@@A@@@@@@@AA@A@@@@@A@A@@A@@A@@AA@ABA@@B"],["@@BB@@B@@@@A@@@@BA@A@@AA@@@@@@@A@@@@A@@@@@@@@A@BA@@@E@AB@@@@@B@@D@BB@@BB"],["@@@@BB@@@@@B@@@@@B@B@@B@B@DA@A@A@@@A@@A@@@@A@@@A@A@AA@@BAB@@@BA@AB"],["@@@@BB@@@BB@@@@BB@@A@@BC@A@A@@@A@AA@@@@AA@@@A@AB@B@@@@@@@B@@A@@B@@@@BB"],["@@@D@@B@@@B@@BFA@@@@@@@K@A@@@@@AA@@@@@@@AA@BA@@@A@@BA@@B@@@@@B@B@B@B"],["@@D@@@BA@A@A@@@A@@B@@A@AB@@@@A@G@@@ACBA@A@@@@@A@A@@@@B@B@B@B@B@@D@@@@B@B@@@@AD@@@@@B@@@B"],["@@@@@D@@B@B@@AB@@AD@B@D@@A@A@A@@AAA@AA@AACAA@@A@@@@BA@@@AA@@@A@AA@A@CBA@@BBB@B@BB@BD@BBD@@B@@A@@@B@B"],["@@BDDD@BDHD@BDBDB@BDB@BBD@F@BA@@@EAAECAA@A@AB@@A@@AACCCA@A@@A@A@A@A@A@AAAAA@ABA@@B"],["@@EB@@GAAAC@@@@B@B@@@B@@AB@@ABBBAB@@AB@@A@@B@@B@@BB@@BA@@B@@@B@@@@B@@@@@BA@@BB@@@DB@@BB@B@BABE@A@AA@@A@@BAB@B@BA@@BBB@@A@A@@@AB@B@D@BAB@BA@A@A@@@AA@BA@@@AB@@ABA@A@@@A@@@A@AA@BA@@@A@@A@@A@A@A@@@@A@AB@@AB@@ABAB@@@F@B@B@@ABA@AB@BBB@@AB"],["@@A@ADCD@BAJA@A@@@CB@@BD@BABA@@DBBDBDBBBB@B@FAB@DBBB@DB@@@DABC@CB@B@D@F@@@BA@CB@FDDBD@@@DCBCBAC@CE@A@@@ACBA@@ABC@A@AA@ABI@E@AAA@ABA@@ACCGEA@A@A@"],["@@C@ABABC@EBAAA@@@@AAA@AAAA@A@AAGA@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@AA@@@@C@@@@@@@A@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@B@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@B@B@BA@CB@D@BAB@D@B@@@B@@DBB@D@BBBBB@BB@B@@@@B@DBB@B@@BFJBBAHCD@BAB@BAAA@A@A@CBAFA@@@@@@@@@@@@@@@A@GAA@@AA@EH@B@B@B@@@D@@@@BBABABCB@B@B@@@@@@@@ABACA@AAA@@B@@A@C@@@A@AAAA@@ABA@@@@B@@B@@B@BA@AD@@AD@BCDAB@B@B@BB@@@B@@@@AB@@@B@@B@D@HBBDBBBBB@BB@@B@B@B@B@@BBBB@F@B@@@BAB@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@D@@@@@@@@@@@@@@@@A@@@BB@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@B@@@@B@@@B@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@A@@@AB@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@A@@@@@@@@B@@@B@B@BAB@@@@A@@BAB@@@B@@AB@@A@@@@@@@@@A@@@@@@@ABA@@BA@@@@@@@@B@@@@@@@@@@@@AB@@CACACAAAA@AA@E@@AC@@@@@@@A@A@@@@@A@@BA@A@A@A@CAA@C@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@GC@@@@@@@@A@@@A@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@BA@@@@@@@CBA@@@AB@@@@A@A@A@AB@@A@A@@BA@AB@@A@@@A@A@CAAA@@@@@@A@A@AA@B@@CBA@@B@@@BBDAF@@@B@@BB@@CFAB@@GB@@A@AA@@C@ABAB@D@@ABAB@@@@@BDBBD@@@@@@BBB@B@DBB@BF@F@B@BA@AD@@@@BHB@BB@@@@@B@B@@@@ABAAA@@@AB@@AB@B@@A@A@AACB@@ABA@A@@@A@CAC@C@@@@@@@A@@@@@@@C@@@AC@AAAA@G@EB@@@@CB@@@A@@ACAA@A@AA@AAC@@B@@@B@BC@A@C@@@CA@AA@MB@@EBA@@D@B@@@BA@A@AB@BAAA@AAC@CB@@AA@AAA@@@A@A@AEE@@AAA@CA@@@@@@@@@@@@@A@@@A@@AA@@CA@@A@CAA@A@@A@@BA@CAA@@@@EEA@EEA@CBC@C@@@@@AAA@@ACB@@@B@BGHAFABA@A@C@ABIBA@@B@@@D@B@B@BAB@JAB@BA@CD@B@FB@@BBBB@BB@@@@@@BB@BBB@@@B@@@B@BBFABAB@@@F@@BBBB@@@B@D@D@B@B@D@@ABA@AB@B@B@@BB@BA@AB@B@B@B@DB@@@B@@@@@BA@BBB@B@@AB@@@@@@AB@DBB@H@@@B@BA@@BAD@@@B@BA@AB@BAFBB@@@D@B@D@@BBBB@@BDBBB@BBBAB@B@@A@ADAB@BABAB@B@@BB@@D@@DBB@B@@@B@@BBB@@@D@BB@@BB@@@@B@@@@@@@@@@@@B@@@@B@@@@@@B@@@@@@@@@@B@@B@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@@@B@@@@BB@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@CB@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@A@@@@@A@A@EA@@@B@@@@ADED@B@BEA@@A@CBA@@@CB@BA@@B@B@D@BDD@@BBBDB@@@@@B@@AFBBAB@@BBBB@BB@BB@BB@@@BB@AB@D@@@B@B@B@B@B@BB@@F@B@@BBB@BBB@@BBBDD@B@BDJD@B@@@BDB@@@AB@@@B@@@B@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@ABB@@@@@@@B@@@@@@@@@@@@@DFB@@@@@@AB@D@B@BH@@@@@B@B@B@@B@@BA@@@@@@BA@@BB@@AB@@@@@@@D@B@@BBB@@@BBB@B@@@@@B@BADB@@@B@@@BB@B@DB@@B@ABBBDABAB@@BB@BBBB@@BA@A@C@@@@D@BAB@BC@@@@BA@AB@@@B@@@B@ABBB@@BB@@B@AA@AB@@ADAB@BC@@D@@BB@@@@@@@@A@@@@@A@@@@BA@@@@@@@@@@@@@@@@@@@@@@BA@@@A@@@@@@@@@@@@@@@@DABA@@@@@@@@@@BB@@@@A@ABAB@B@@BBA@@@@@A@@@@@@@@@@@@@@@@@@@@@@BA@@B@@@@B@@@B@@@@@@@@@B@B@@@@BA@@@@@@@A@@@CBAAA@A@@AA@@B@B@BBB@@EAAB@@BB@DBDA@CC@@ABAD@@BD@B@@@BBBBB@@BB@@B@DABB@@B@BABAB@BBBB@B@@@@@DH@D@@BD@@@B@BB@BB@CD@@@@@B@@B@@@@ABCB@@@BD@B@@@BBB@@BB@@BB@BB@@@@BB@@B@@@ADBD@@@@BBB@AFAABBB@BBBB@@@@BBDB@B@@D@BABB@BA@@@@@A@ABAB@BB@@AB@B@DB@@@BBA@@BB@BBBB@AB@B@B@BB@@@A@@@A@@B@@@BDBBB@DAB@B@BB@BBAB@BB@@@@B@@CA@@AA@@A@ABCBC@AAC@@@A@ABA@@@A@C@@DA@A@AB@BBBA@@BABBB@D@BBB@B@B@B@BBB@B@@@DAB@BB@@BA@@BA@A@@@AA@@A@AB@BA@@@A@@BA@A@A@A@A@A@@@AD@D@B@@@@ABA@@BA@@BBB@@A@@AA@AA@@C@ABA@A@A@@@A@@AA@@@A@A@@DA@@@@@A@A@E@@@@@@B@@@@A@@@@@@@A@AD@D@B@@BDBB@BBBA@@@@@AB@BA@@DBD@D@B@B@@@@@BBDB@@B@@A@@B@D@@@@A@A@AB@@A@@@A@A@@AA@@@@@AB@B@@@BA@A@@D@@@B@DAD@B@@A@@@ADCD@BA@@@ABA@A@@DA@@HB@BDAB@BA@BAB@B@B@@@@AB@@@BB@D@B@BBDB@B@@A@AB@@@@D@@@@BBBB@BAB@@@@@@@@@@@@@B@@@AD@BBB@@B@B@@@@@B@@@@@BDBB@@@B@B@@@AB@@BB@@BB@BB@BB@BA@@@@@B@@@@@@@@@@@@B@DAB@BBBBB@B@B@BB@B@DBB@@@B@@@@@@@@B@@B@@DDBDBBBDBB@BB@@BB@B@B@BB@@@D@D@D@@A@AB@@@B@@@@@@DB@BB@@B@@A@@@A@AAA@@B@@AB@@A@@BA@AAA@A@@@@@A@@@BD@@@@B@@@B@@@D@@@B@@@@@BB@@@@@@@BBBBA@@B@@@@A@A@@@AB@BBB@@@@CBB@@@BB@BLB@BAFED@BD@BCBBDBBD@DDBBB@BADDBFDBDBDHBBBBABAB@@DB@HHB@DD@ABCFCB@F@FAB@B@FAD@BAJDD@FBDBFFFDB@@BAHADABAFBHFDJDDAHAD@F@BH@FDF@FBADBFBDABD@@FARDB@F@BDHA@A@@AA@@BA@@B@@@@@A@@C@@@@BAB@B@BA@@@A@A@@BB@@@BBDBBBBDB@B@BBBBDBB@BD@BBB@@@@@@D@B@BBDADA@B@@DADAFGB@BADA@C@ADAB@F@ABDBBBDABDBBBBB@B@@@@A@CBEBA@C@@D@BA@ABAB@BC@C@A@ABCA@AA@ABAB@B@DCBAFABA@@@@@CAAAAAA@AD@B@BABA@CAA@CACDC@E@@@A@AA@BE@CBA@A@AA@@@@CAAC@@E@A@A@@B@@A@AAABA@@A@@A@@@@@@@@ACB@@@B@@@@AAAB@B@AABACABAB@@@AA@A@@BBBAA@@A@@B@DCB@@@B@@A@E@@B@@C@C@@@A@AAA@BA@@@AAA@@BAB@BA@A@A@C@ABCB@A@@@A@A@AAAB@@@AA@@D@@@@@AAA@BAB@@@B@BBB@BADABAFCDC@AA@C@@@A@@@B@@AAAAB@AB@@AAB@@@AB@@AB@@@E@@@FA@@C@@@@@A@CAACA@AC@@AAA@@@A@A@A@@BAAA@A@@AAAA@@AB@DAD@B@D@BAB@B@BCFAFCDABAHABBB@@ABA@AAEA@@@A@C@A@AA@@@@@@@@@@@@@@@@@@A@@@@@@@@@E@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@CA@@@@@@@@@@@@@AE@A@CAA@A@@@CBA@ABAAAA@CBA@AAEAA@A@@@@@@A@@@AAAC@ABCDA@AA@AAA@CACC@C@A@A@@@@@AFCBA@C@@BAAAAA@@AAA@@AAAAA@A@A@A@EDABADE@C@@AKB@@@@AAC@@@CCAEA@BAAABC@A@@@A@AA@@A@@@GF@AAB@@CB@BBB@@@@@@ABA@CDEH@@AB@@CE@GCACACACCB@ACA@A@AA@ACCA@@AAAA@AC@@@@@AAA@@AAA@EBAA@@AAB@BAB@@@D@@@BA@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@AB@@@@@@@@@@@B@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@BA@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@A@@@@B@BAB@@@@@@@@@@@@@B@@A@@B@@@@@B@@@@@@@@@@@@@@@@@B@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@C@@@@B@A@BA@@@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@BC@@@@@@@@@@BA@@@@@@BB@@@@B@@@BC@@@A@@@@@@BA@@@@BA@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@AAG@@@A@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@A@CC@@@@@@@@@@@@@A@@A@@@AB@DBB@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@C@@@@@@@@@CBCB@@A@A@@@@@@B@HAB@@@@AB@@AB@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@A@@@@@@@@AACEAC@AAA@@@@@@@@B@@@A@@@@A@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@A@@@@@@@@@@@@@BC@AFG@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@BC@C@@@@B@DA@@@@@@@@@@@@@@@@@@@@BA@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@LE@B@A@@D@@A@@@@@@@@@@@@@@@@@@@@@@BI@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@AA@@A@@@@@@@@@@BC@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@AA@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@AC@AAA@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@BABA@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@B@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@BBBB@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@A@@B@@A@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@BBB@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@B@JB@B@@B@@@@@B@@@B@@@@@B@@@B@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@B@@@@@@B@@@BB@@B@@@@@@@@@DB@@@@@@@@@@B@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@B@@A@@@@B@@@B@@@@@@@@@@BB@@@DB@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@B@@@@@@@@@@@@@@@@@HBB@B@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@BB@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@BB@B@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@AB@@@@@@@@@@@@@@@B@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@BBF@D@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@B@@A@@@@@A@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@CB@BA@@@@@@@AHGB@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@B@@@@@@@BA@@@@B@@A@@B@@A@@@@@@@@@@@ABA@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@DI@@@A@@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@CBC@@@@@A@@@@@@@@@@@A@@@@@@@@@EA@M@ECACAC@EAC@CCGEGECcMECSGmQYIEEE@C@CBABAJEDADCDODI@CAEACEAIAOCWAAAWCQEIGKIWMECCAI@C@C@OGCF@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@G@CBEAABA@@BCAA@C@A@@@CAC@C@@@AG@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@CA@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@AB@@@@@@@@@@@@@@@@ABA@@B@@ABA@ABE@A@E@"]],"encodeOffsets":[[[117400,23182]],[[117393,23200]],[[117397,23167]],[[117392,23235]],[[117394,23162]],[[117399,23197]],[[117390,23108]],[[117387,23173]],[[117386,23263]],[[117400,23225]],[[117397,23112]],[[117402,23133]],[[117392,22989]],[[117390,23260]],[[117365,23236]],[[117378,23206]],[[117399,23178]],[[117382,23154]],[[117422,22943]],[[117397,22987]],[[117412,23115]],[[117401,23206]],[[117401,23220]],[[117361,23215]],[[117393,22968]],[[117403,23116]],[[117381,22988]],[[117210,23212]]]}},{"type":"Feature","id":"441323","properties":{"name":"惠东县","cp":[114.719988,22.985014],"childNum":12},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@B@@@@A@@@@A@@@@B@@@@@@"],["@@D@@@@A@@@@@@@A@@AB@@A@@@@@@@@B"],["@@@@B@@@B@@@@AA@@@@@@@@@@@@@A@@@@@@B@@"],["@@@@@B@@@@@@B@@A@@@@@A@@@@A@@B"],["@@@@AB@@@@@B@@B@@@BA@@AA"],["@@BB@B@@@@B@@@BA@A@AA@@A@@A@@@AB@@@B"],["@@@B@@@@B@@@BA@@@A@A@@@A@@@@AA@A@@@@A@@B@@@@@@@@@B@@@B@@B@AB@@A@@@@B@@B@"],["@@AB@@@@@B@@BBB@@@BBD@@A@@@A@@@AA@C@AA"],["@@@@@B@B@B@B@@BBBAB@@A@A@AAA@@AA@@A@A@@@@@@BB@"],["@@A@AAA@ABABABA@AB@@@B@BBB@BAB@@@@@B@@@BB@@ABB@@@@@B@BB@DA@AB@@ABA@A@@@A@A@AB@@ABA@AAA"],["@@DFDBDBB@BADC@@@@B@B@B@D@B@@C@C@AAACAA@A@@BAB@@@@A@ACAAAAA@A@@AA@@A@A@@A@AAAB@@@B@B@@@BAB@B@FBD"],["@@ETAHEJCDABEBK@Q@G@UAcESCSAS@kA]AYAA@ABAB@B@D@D@B@HAHCFAFCD@BBDBDBFBFBJ@D@L@HELILGHEFAFAD@D@DDPDHDHFFDHBHALCVALAJ@LBJJTPdDFDDBB@DAFCDIDOFKDIJGHABCDA@EDEDEBC@@F@@@@@@@@@B@@@@@@@@@@@B@@@@AD@D@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@AB@@@@@@@@@@@B@@CJ@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@AB@B@@@@@@@@@@@BA@@@@BA@@@@@AB@@@@@@A@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@A@GH@B@@@@@@ABA@@DA@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@B@@@@@BA@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@A@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@C@E@AA@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@A@A@@@@@@@@@@@@@@@A@@B@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@A@@@@AAA@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@AA@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@A@GA@@@@@@@@@@@@@@@@A@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@CA@@A@@A@@@@@@@@A@@@A@@@@@@BA@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@A@@@@@@@@@@@CA@@@@@@@@A@@@AA@@A@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@AIAA@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@A@AA@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@B@@@@AB@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@AAAA@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@A@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@ABAB@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@BB@BBD@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@BB@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@AD@@@@@@@@@@@BB@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@AJ@@@@@@@@@@@@@@@@@@@@@@@BC@@@@B@AKFA@@@@@@@A@@@@@@@A@@@@@A@@@@@@@AB@@@@@@@@@@@@@@@@@@@@CBA@@@@@@DAD@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@EH@BAD@@@@@@@@@@@@B@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@B@@B@@@A@@@@@@@@@BB@BBDDFBB@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@BA@@BA@@B@@A@GBA@@@@@@@@B@BA@AD@D@@@@@@@@@D@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@AA@CBA@@B@@@@B@@@@@@@@@@@@DDB@@@@@@@@B@@@@@@@@@@@@BB@@@@@@@@@@@@@@@B@@BH@B@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@AB@@@@AB@@@@@@@B@@AD@@A@@@@@AA@@@@@@AB@@@@@@@@@@AD@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@@ABB@A@@@@@@DAB@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@@@@@@@@A@@@@@A@@@@BA@@@@@@@@@@@@@A@ABA@@@@@@B@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@AB@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@A@@@@@@@@@@@A@@B@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@AB@@C@@@A@ABA@BB@@BBFAB@BB@@BB@B@@@@BDB@BB@BB@DD@BBBB@B@BDA@DDDBDBDB@HDF@@BA@@FGDCB@BA@@@@@@AA@ADA@@BA@BHE@@B@@@BBB@@@B@D@BABB@AFBDB@D@@BD@B@@A@BL@@@DCFABCB@F@B@B@BBBBB@BB@BB@@BBBBAB@@@DABED@B@@@@@B@B@DDDDBB@BBB@@BCBAD@BBDBB@@B@@@@@@@@BBBBF@BAB@DBBBBBAB@DA@@B@B@DBB@F@@B@@@@@@@@@@@@DB@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@F@@@@@@@@@B@@@@@@@@@@@@@@@@@@@BBB@D@B@@@B@BF@BAB@BA@AAGBABCBEDEBADA@A@ABC@A@C@CBA@@BB@BB@BB@B@BB@AB@B@B@@@B@BB@@BDB@BDDBB@@@@@D@@@EB@@F@@@A@@BA@@B@@BA@BA@@BBABB@BA@@@B@@@D@B@@BCDEDABCBABA@AAA@@@A@ABB@BB@@@@C@@@BB@@A@BB@B@B@B@@@BDABAD@B@B@B@@ABA@AB@BB@@B@@ABB@B@B@@@D@DA@@@@F@BA@@@A@CDA@@@@BB@ABAA@@@BBB@@A@ABDBABBBA@A@BB@B@@A@@@A@BD@@@@@@@@@BB@@@ABBB@B@BA@@@@B@B@FD@BB@D@@B@@B@BAB@DAFB@@B@B@@@FCDBD@DBB@DABABA@C@@BBBBBBB@D@@@@ABEBABCDA@A@AB@BBBB@AD@B@B@DADA@AB@BABC@@@@DABAF@D@BDADAB@B@D@B@D@DBBABABBBBDABBBADDBA@@FBB@BBB@B@@@BBAB@BAB@BCDABBBB@BBBB@D@BBBBBB@BBDBB@BB@@ABBDA@BB@BAFBBB@D@D@BA@A@AD@BBDAFBD@B@B@BABBBDBB@@CB@B@BBD@BD@F@DBDBDBBDBB@DBFABFD@D@B@DCB@FBB@BBJBBBBBB@DBD@BA@B@D@@@BBBB@@@BF@FBF@FFJFHFBB@DBFBDDDDBBB@B@@@DDB@@BAFBD@DBFBB@@@FC@CD@BDBBBABCD@BBBA@ADBDA@CD@DBBBDBDBDBDAF@FAF@@CB@B@BABABA@ADA@ABAAA@AAC@A@CBC@AAAB@BABBF@D@D@BA@AB@D@B@B@B@BC@A@@@CBADABAD@BABADA@A@ABADAD@B@D@BA@ABABA@ABA@ABABB@CBAB@BA@AAABADA@ADCBCACD@D@DBDADABC@A@ADBD@B@B@@@@@DB@@@BDDDDBBBD@B@BAB@@BBBBBDBBD@BDDBB@@B@BBBB@@D@@ABCB@@BD@BBBABBBA@@BA@A@A@ABA@AB@B@D@@BDB@CB@DAD@BD@BB@@@DDBB@B@DBBBBB@B@BDB@BDBB@BBAD@@BD@B@DBBD@@BBDAD@B@D@BBBH@DBB@BBBABBBBDABBB@DBB@BBADAD@DABADBBBDBB@@D@BB@FB@BB@DBBDBB@BDABBBBBDB@@BBBDBB@B@B@@@D@B@BCB@D@BBFAD@BBB@BAB@BDB@@@B@D@DBDB@BB@BABBB@BBDB@@BBDABC@A@@DBJ@BAF@BA@@DBDCF@B@B@DA@DBB@B@DA@@D@F@BB@BBBB@DBBBDBBBB@DA@@BBDBBDBBBBBABBBB@ABCB@D@@A@@HABC@AB@@CAGEE@C@ACA@AB@D@@@B@@@@@@AB@@@B@@@@@BAD@B@A@@@A@@@AA@@@@@A@@@@@@@B@@B@@@@@B@@BB@@@@@@B@@B@@A@@B@@@@@@@@@B@@@@AB@@@@@@A@A@@@A@@@@@A@A@@B@@@@A@@B@B@B@@@BA@@@A@@@ABA@@@AB@@@@@@AB@@@BAA@@ABBB@B@@BB@BBB@@@BB@@@@@@@A@@@@@A@@@A@@AA@@@@AA@@@@@AAC@@AA@@@C@@@AAA@@@A@A@@BABA@@BA@@@AB@@@BA@@@AB@BA@A@@B@@@B@@@B@@@B@@@@@B@@@B@B@@@@BB@@@B@@@@@BA@@B@@@BB@@@@@BB@@@B@@@@@BB@@@BBB@DDB@D@B@BBBDBBBAB@BABADBBBDBBFD@BDBABBBD@BB@B@B@B@B@B@BABBBDAFADADBB@B@B@BADBFAB@BA@@B@HBDAB@BAB@D@BAB@BCDABABBB@BEB@B@DBDAB@D@BDB@DD@DABBFBBD@D@DBBADA@BDDBD@DBB@B@DDDFDDAB@D@DABBB@BB@@@@BBBDDADBBB@DDDDBDBABB@DBB@D@BBFBB@FBBB@BBBHBDBBBADBBBAB@DAB@@AD@D@BABBFABA@A@@B@BADADBB@B@DA@@BA@BB@B@B@BBBBD@@@@@DABB@BB@DBBB@B@BB@B@B@D@DBB@CDAB@DBDBB@BDBB@DBBBDBBAB@B@B@@@@@B@DAB@B@B@BABADA@@@CBB@BB@DBBDB@BB@@B@D@@ABAD@FA@@DBBB@@BBBABDBAB@BABBBB@BB@B@B@DBBB@@DADAB@FBDBDBD@@A@CAABAA@@AB@BADADABBBBD@DBBBDBD@H@DAD@B@B@@BBDDBB@@@@@BABCFAAAB@BAB@@AB@D@DABA@@BABA@@@A@@@A@CBAD@@BBAB@BA@A@CBBBAB@@@B@@CDAB@@C@@@@B@BABA@ABBB@D@D@DBDBBBDAAEA@AA@C@@@A@ACC@AF@AAAAA@@ABA@AB@BBBA@CAGAA@EAA@G@CAA@CF@DCB@@@CC@@@CB@@A@@AADC@AACBA@ABA@AB@B@DBHD@@LJFBBDFBFDBBDABABAF@DCDA@@BEBCBE@ABBF@BAB@DADAJADCBEH@D@D@BBBBB@BBAKPODDDA@ABAB@@@BADB@@D@BC@A@ABCDCFGGC@EB@D@BA@A@IAABABED@AA@C@C@AAAA@DEFAD@@AB@BABADCF@DAB@@BB@B@D@BA@A@@@CBA@AA@@A@@B@B@@ECBA@CBA@A@AACBA@C@CBC@@A@CEEA@CAA@BIBEAABCCEA@CBAAC@A@ABCBC@ABC@CCAC@EAC@AA@CCCBEC@C@@GAG@C@A@CACGE@CAE@@A@ACBA@CCA@@@CAC@CA@E@ABGEEA@A@@C@CBAAACC@ABCBACAG@A@CAAEAACABGAACBCBCBEBEGCCE@C@E@CBCDCBGACA@@AAC@A@@@CAC@A@BE@GCGACB@@IDC@CBA@@CCCA@C@CAABED@BEBABABCACFE@ABCCA@@BEDCBAACCCBC@CG@CAEACAC@@BAAG@CBGAE@CABEDA@CBA@AA@CAGCCECACCCAEI@CAACC@CAAECG@AAACEAE@EAG@CBCC@A@ACAA@AAA@@BC@CCA@GC@CCAA@GDI@@@A@@AA@ACE@GAGAAE@@A@AACCGEAAAEGAAE@E@ABA@CCA@C@CA@GCECACGECE@CDAAA@E@@@AACC@AB@BCBIF@BCBA@A@A@@@CB@BAB@BA@ABC@A@ABCBA@EBCDCB@D@B@@CBC@ABA@@A@@BA@A@CA@AA@@AA@A@A@AAACAA@CA@AAA@@@A@A@@@@@AAAABAB@@ABAB@B@@ABA@ABA@@BA@CBADA@@BA@ABAAAA@@A@@@A@CAAA@A@A@@AAA@@ACA@@@A@AB@@@@ABAA@@@AAC@A@A@ABAAAAECA@@B@@AB@@A@A@AGBA@A@A@@AA@@AAA@@@@AA@@CAA@A@AA@AAAA@A@@ACAA@AAA@A@A@@@AAAA@@@A@ABCBAB@@@@AAA@AAA@CA@@BA@@ACA@CAAB@@EAAAAAA@A@@@CA@@AAAAAAAAAA@@E@EBGA@@A@@A@@@AAAA@@@AB@BA@AAAA@@CAAA@AA@@ABA@@@AAE@@@@@A@ACE@@AAC@@@A@AA@A@@C@C@CA@@A@@BABCBABC@C@A@@@A@@@@AAA@@@CAAAACAGE@@@A@AAAA@@@C@CBA@C@A@ABA@C@@@ACCA@AA@CA@@@A@@@AAA@AC@E@C@C@G@CBC@@@@@AEC@@A@AAAAAA@AAAACAACAAA@@ABAB@B@B@BA@@@ABA@@BABA@@B@@@@AAE@@@A@E@@BA@A@@@A@@DAB@@@BAB@BABA@A@@@A@AB@@CDC@AB@D@B@BA@@@AAA@A@AB@@AAA@AAA@@CDAAA@AA@@A@ED@@C@AACC@@@A@A@ABA@CB@@@B@D@@ABABC@CCC@AAA@@@A@@AC@@@A@A@ABC@@DA@AB@@@@A@CBA@@FA@@@BFB@@@@@@DD@@@ABAB@@@B@@ABAB@DC@@B@@AB@@A@@@A@@@A@C@@@@@@@@@@@@@@BA@@@@@@@@@@CEA@@A@@B@@ABAAA@A@@@A@ADC@@@A@A@@AAAAAA@@A@AB@@@@AA@A@A@C@@@@BAB@BAB@@AD@@@AA@A@@@AAA@CB@D@@A@@@A@C@ABAB@B@BBBA@@@CBAB@BAD@B@B@@@B@DBBA@@DA@ABAB@@@BB@@B@BA@@@A@@AC@A@@@A@ADADEBABAB@BADAB@@@BBB@DA@@BA@AD@DA@BNDB@@A@@@@@A@A@A@@AA@@@A@@@ACAAA@A@@@C@@@@BA@@@AAAAAAG@@BADE@A@@BA@@@AB@@AB@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@BA@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@@@@@A@@@@@@@AG@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@A@@@@@@@@@@@@@@@A@@@@FEBCB@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@BA@A@@@@@@@@B@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@A@A@@@@@@@@@@@@@@@@B@@@@@@A@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@AC@@@A@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@A@@@@@@@@@@A@@@@@@B@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@BCA@E@A@CAGAMCA@AAGGACAEAECCOKMGQIYS_[OOKQGMGUAO@S@I@GBA@C@C@EBE@ABGBK@I@ECGECOGC@E@E@E@EAGCIEEAC@C@CD@BAH@L@DBFFJ@FAJ"]],"encodeOffsets":[[[117484,23117]],[[117842,23195]],[[117486,23168]],[[117860,23175]],[[117793,23091]],[[117593,23050]],[[117489,23169]],[[117483,23276]],[[117602,23069]],[[117481,23120]],[[117597,23053]],[[117643,23111]]]}},{"type":"Feature","id":"441324","properties":{"name":"龙门县","cp":[114.254863,23.727737],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CAC@G@GBCDCAAACGAEAEBEDCBADEBEBCBE@C@C@EBCBA@GB@DA@CDKHCFAJAFCFAHCDCFAFBDBBFBDDFBDDB@B@B@@BB@BB@BB@@BB@@BBB@B@B@B@BAB@@ABAB@@CBCBCBADC@ABABABABAB@@@B@B@@@B@@@@@BBB@@@BB@@B@@BBA@@B@@@BAB@B@@AB@BBB@BB@BB@BBB@B@B@@@DABA@AB@@IEIAIDC@C@C@A@C@AB@BABABABABCDABAFDN@@@B@B@BA@@B@B@BAB@DBD@D@B@B@@BB@B@@B@@@LCF@L@HBDBBBFHDBGHAB@@ABA@AB@@@@CAC@A@C@CBABA@A@A@C@CCC@A@C@CBE@CAA@A@CAA@C@C@CBCDABAD@B@BBAB@@@BADAB@B@B@BBBBFFDJBB@@A@@B@@@@KB@@M@E@CDCHED@BA@C@C@A@A@A@C@A@ABABA@@BAB@B@BABAB@BA@ABA@ABCBA@ADADIBABADAB@BAB@@@B@@@B@B@BBDADABABCBA@CBA@C@A@CBC@ABABABAB@@@BAB@@@B@B@BAB@BAB@B@B@B@B@B@@@BA@@BA@@BA@@B@B@@@B@BAB@BAB@BCBABABA@C@ABA@A@@B@B@@@B@B@BBB@@BD@DBBBB@BBBB@BBDB@@BBB@@B@@@BA@@BC@ABAB@BABBF@DBBBDBB@B@BAB@D@DABCBABC@ABCBA@ABABEBEBA@A@A@AAA@A@C@@BA@ABA@@B@BBB@@@B@B@@A@@BE@C@E@A@C@AAA@A@@@A@@@AB@@AB@B@BABA@@@@B@@@BBDBB@@@B@@@BBB@@BBB@B@B@B@BBB@B@@BBB@BBB@B@B@@BB@@BB@B@@A@@BA@A@ABA@A@A@CD@DAB@D@@@@@@B@L@RALBDJ@HBFBDRC@FOHABHHBB\\BDBFBD@B@D@D@B@DBB@DBD@BB@@DBDBDBBBBBFLFF@@B@BL@D@HDHB@D@L@FBFJBDBDBFB@@BB@H@FDJBBBFADB@F@@B@@B@@@BB@@@B@B@@@D@D@B@B@BA@@HEFAFDDFB@JDHAB@D@BHBB@BBB@D@B@D@D@D@@@D@@@BBBDBDBD@D@B@D@D@B@DBB@B@DBB@BBDB@@BBBBBDDB@@HHBFFDFBDAAEAEICAI@A@AB@FAD@DBBE@CDCDGD@BFDJFDJF@FDD@@BBDDHBFBVDDAAB@BELCFOBIFCDCBADBFLDHFIHIBCJBH@DDFDFJDFDHB@D@B@H@@@B@FD@BH@BD@BDCD@@ABA@ABCFABBBAB@@CD@DBBADAD@DAB@BABEBA@AD@DDDBD@B@B@D@DA@@DBBADA@A@ADA@@BADA@@B@B@B@HB@@ABD@@BDDDAD@BDBBBDHB@@BBD@BBBFHAFBDBBBDBBBBBBBBDADCDAB@DAN@D@@ABKJBJBD@BCBCF@@@BBDDDDJ@JADBFBJDHDCFBBFAD@JDD@FFCDF@DCBBF@D@BADABCD@F@DBHDHLDPD@D@DD@BDDFBD@B@B@BAD@FAFAAA@GDCFGBAD@B@D@B@HGFDDBB@F@FDB@FEFAFAPAHDD@D@LNFAHDFFF@B@FFBFBDHAFBDABGHAIC@GKGIACACCEBAAC@@@CCCCDCFBDAEGGAEKCECGGE@@@G@@LELAL@HFBBH@@@DID@BA@CJAJ@DABBABFDHBD@@EFCFADCFABC@CFCBBF@F@LB@BL@FFFDDBDBJK@@FCFABCF@BAFAEE@A@EAC@ABABADCFED@D@@CA@ECCBCAEAC@EEECAA@E@@CCCAEC@E@E@I@CCICEDK@GC@FIBCBC@C@ABCLAF@DGCCBIF@FIBA@C@AAC@AACAAAAAAAAAAACEE@C@ABI@ADGBABA@@@AACAA@GJELAH@B@B@BA@ABA@C@CEEAAAADCB@BA@CDCDAD@BABCD@@D@@BB@D@BBDBBBDBBBBHNB@FE@CL@BABCBAFKBEDCBEBCDKACDCHCJ@HDDD@AB@B@DABA@ABACEC@EE@ABE@ACCCGGCAACBAAE@AA@A@CACAAAFI@KBAC@CO@EACACECC@@GG@@AC@C@GDCB@D@BADA@A@ABCD@B@B@@BD@@@BBHBFCJ@F@AEEEFG@CBCBC@GDMHOA@ACECE@AEA@A@E@@FA@EB@FCBCGAE@CDBBEAEGCEBGAE@AC@GA@@ACAA@EGACCE@A@E@CCC@A@EEAECEBG@A@CEBK@@@ACA@GDA@A@AAAAACEBEE@CBGEEECMCCACCE@A@Q@@CACCAA@C@CIAC@@@AA@CCCACG@IEEGAC@ABCCKEEEKAKGAEEEECBCEIEEA@E@MCGCCCAE@A@CAA@E@ABBH@LEDCFA@MBCD@DAD@@ABC@C@ABCBCDCDCBI@CC@@GCGCCCMEEHAAA@AAKKC@@IEECEGAABA@CBCBABCCA@GK@CC@@EBAACC@CBG@CB@@CAA@C@CBAAEGE@C@MCIGMIACC@CBABOJC@EACAACCC@AACAEAGA@AACAC@ABE@E@CAC@GAGAAACCCCCCACAG@G@CAC@@CAA@CA@C@A@@AA@@AAB@@ABAB@B@BA@A@EAC@GBEBA@AAECCCEEE"],"encodeOffsets":[[116779,23914]]}}],"UTF8Encoding":true});}));