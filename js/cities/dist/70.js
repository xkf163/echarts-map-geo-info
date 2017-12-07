(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('淮北', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340602","properties":{"name":"杜集区","cp":[116.828133,33.991451],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@CIEGEEAEAIAIAECE@@B@D@HA@@AC@GDE@A@AA@MLC@IIGGAC@AAA@@CBA@CD@@A@@AABAAAAAA@@@G@AACK@KCOE@@ABIN@@ITDJBJBJNCBCAG@ECEDAB@HPHDFHGDODGH@B@@HB@FAP@F@BAFJFJHFDFDA@KADHH\\NFHHBDB@BB@@B@@@@ABAAC@AAC@@BE@C@A@ADADAB@B@BB@CFCB@@AD@@FB@@@@@@AHH@BFB@@BBC@@F@DBBBBHFAFCH@D@BABLHLD@@FA@@@@DCDE@G@AGCAE@@@C@KD@BAB@BADA@AGKAC@ABG@C@AAAAACAEACG"],["@@CCCACCEAAAIEAAA@EAEAA@A@A@A@C@GDBDBD@@@BA@AB@@BB@B@BAB@BB@AB@@@@AB@B@B@B@@RFBB@@GDA@CAA@@@C@CB@AA@AAABAA@@@@A@@@GD@@AAA@@AC@@BA@@FBDA@ABEDE@E@@DC@@@@A@@@A@AA@@A@A@AAA@AA@C@@BBBKFCB@FG@A@A@GD@@@@A@I@@C@@E@@AC@@FC@@BABA@@BB@@@@@@B@@@@@@@@@@@@@B@@C@A@AA@BBDFD@BBBBB@@DDDB@BB@@BB@@@@@@@A@@@A@@@@@@@C@@@A@@BA@@AGB@@@@@@D@B@@@B@@@D@@B@BC@ABA@CBC@@AFAAAAEAA@AEBACABCAA@ABA@@BA@CBEB@B@@@D@@B@@FDD@BAD@@@B@@BBBB@DBD@FBBAB@BAXCD@B@@AB@BAB@B@@@@@B@@@HFN@L@DBDDTHHEHEJFFHFLHB@@AGM@EBEFEBEPO@@FDB@BJJDJBFBDNCDABHDDBFAB@DAB@D@BAB@DABAB@D@B@DA@@BADA@AB@BBBBBBD@BBBBB@DBBBBBB@DB@BBBBBBBBBBBBBBBB@BBBBBBBBBB@BBBBB@BBBB@BAD@HCD@FADAFADAHC@@HG@AEKN@F@XEJ@JFTAB@DAAAACA@@AA@@AAA@AAAAACC@@AAAAAA@AAAECCAAAAA@@AA@AAAA@AAAA@@AA@@@@@AAA@A@@@A@A@A@A@@@A@@@@@ABA@A@@BA@AB@@@@A@@@A@A@@@A@@AA@A@AAA@AD@T@PCB@FEAOAGF@POACIK@A@@B@@AB@BC@A@@@@@A@@@AAAAA@@AA@@AA@@@@BA@AA@AA@ACA@@@AA@@@AAC@@AA@@@@AAAB@AAAAAAACAAA@AA@AAC@AA@AA@ABC@ABE@C@E@CDE@A@CAAAAIAECE@A@CBIDEBABADA@AFAB@FCBA@A@A@CAA@ECEC"]],"encodeOffsets":[[[119848,35019]],[[119724,34767]]]}},{"type":"Feature","id":"340604","properties":{"name":"烈山区","cp":[116.813042,33.895139],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@B@AE@@@AC@ABMBM@C@@@G@K@A@CAAC@CBEBEBAB@@E@CBEBGBC@C@ABA@@@ABCDC@@BC@EBABA@A@CF@@@BAJ@@AB@BABULKHMJKFCBA@A@A@CBA@C@CBCBADAB@D@D@B@D@F@BABCDCDABIFA@A@@BABCFABABABABA@ABA@ABA@A@ABCBABAB@DCJ@B@@ED@B@BABAH@@ABAB@B@FABABADABADABRHBB@@BF@JABADEJ@JBH@FMVGH@B@F@HHLHFTHBD@DABUVMN@F@B@DBF@J@H@HBHBFHB@@@@@@DBFH@JEFGBN@B@@AB@@BB@FAH@F@BA@@DC@@D@H@BBB@@BD@B@B@DA@@B@BCBA@@B@B@FBD@B@B@@BBBD@BB@@BBBDBDBDBB@@@BDD@DBDDDBDBD@BB@BDBB@B@B@@A@@@@B@@ABADAB@BAD@@AB@BAD@@@B@B@@@B@D@@@B@@BB@B@@BB@@@B@BBB@B@B@BB@@B@B@@@B@@D@@CF@F@FCBAB@AC@EB@@AD@@BB@BB@@HC@@B@@@@@BBBABBB@@BDAD@@@B@DBB@HC@@AAQE@@@A@A@ABA@@@@BAA@@ABA@A@AAA@@BAB@@A@@ACACHCD@B@B@B@B@FBFBB@BBJFBBFBDDDBDDFDFDB@DBB@B@B@DA@EBABEB@BCBAFAJCDAB@F@FDJBBBBB@D@BCF@D@F@DAF@BAD@BBBB@@@NCDADAFCD@H@BBB@FDDBHCFABA@CBABA@A@AAACCBABCBABAB@FC@ABC@C@A@CAA@AAAAA@CAAA@@AAACCAA@A@ADC@A@EBABADA@@@AB@AC@CCC@AACCCEECAAAA@ABCBAA@@AAAACACACAEAG@EAA@@AACAEAE@E@E@O@CAG@AAC@E@I@EAGCOCGAA@C@CAIBC@E@C@AACAM@C@K@I@EBEAC@CAAAA@C@C@CAAAAECAA@A@ABC@A@GBC@MDABABCBCDGE@@@C@A@G@E@A@CBAB@ACC@@@K@G@ABC@C@ABCBEDKDO@G@C@@GAE@@A"],"encodeOffsets":[[119739,34513]]}},{"type":"Feature","id":"340621","properties":{"name":"濉溪县","cp":[116.766298,33.915477],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EBEFCBEDEHEDEDCBCFEDEBCBE@EBCAE@EDEDABABCDABAB@@@B@BADAB@F@FDL@DABCHAB@D@BBF@BF@BBDL@@BB@B@BEBAB@BDJBDBDBDBBBFBD@DBFBBBD@B@BAB@BADAB@B@HAHAB@DFB@DBF@BBD@BABADA@BDFBDDD@BBF@FBG@IBE@CBA@EBA@CBC@@@GBIDEBIBGBEBIDGDCBEHCFABCBEDGDG@EBGAI@C@C@CBEDADCDCFCFAFCDGFABEDYHkEM@IBIBMBKNO@IBQECA]CA@A@E@GGE@EEACEAGCGAGAG@I@E@E@E@EDEDQVETBNDJDDBB@FBJABADEF@B@B@D@DC@ABCBABCDA@AB@DDB@F@FBBBB@FABABAB@B@B@B@BBD@DBB@DBB@B@D@BD@BD@BJBDBFBF@B@DBB@@FAB@BA@EB@HC@AF@D@F@BB@D@F@J@@PGBGB@B@B@B@BBFADBF@DAHCBCBEBGBIBK@A@EBI@GDEBCFCFEFADA@ADEHCFCD@B@@AF@DAD@F@HBJ@D@BFN@B@DBF@@ABA@AF@D@D@BE@CB@F@FABC@E@@P@FGBAF@BCDABCBC@EDA@@NAH@BA@AFA@ABA@A@A@CBA@IBABC@A@CBQBBF@DBD@HBD@D@H@B@FC@C@AAC@A@A@A@@@C@A@K@CBE@G@C@@@@D@DBB@F@DAB@@ABA@AFABA@A@IBA@@D@BABBD@DBFDBDDDDBFBB@B@BDABD@B@B@@BBBBB@B@BA@@B@B@BAB@@AHGDC@@BAB@BB@BB@B@B@BAB@B@BAB@@@B@@DBBBBB@@@@B@@B@@@@B@D@@ADCNAD@B@D@D@B@@BJ@DBF@B@@DF@HBB@H@B@B@@@BA@@BF@N@D@HBBB@BBBB@B@BBBBBB@D@B@B@DBBD@B@B@@BBBF@LABDDBD@BBDBBDBB@@BBB@DAB@LEB@D@B@FAB@BDDLD@DBF@FCF@FAFHBF@D@BH@BDD@BB@@HA@@@C@EBCDA@BB@@AJDBH@DXA@D@@@D@@@B@@@BA@@BC@@BDH@F@F@@BFDDDDDDF@HBH@@@H@F@JAFCHAHAJEJEJE@@HCHCJC@@FAH@H@D@HDBBBB@F@DAHCFAF@@AH@F@B@FBD@BBDDDDDDHAF@HEFAF@DAD@DBDDDDDFFDDBBBJAFCF@@HDDBD@BANENEF@F@R@NAV@JCBA@ABC@A@CAA@AAA@@@A@AB@J@RBLA@@P@H@P@D@D@F@DCBA@A@A@A@@@A@A@I@@@IT@B@@@J@B@B@BBDABA@B@FBABAHCDE@@DABAB@@ABACAAE@@AC@C@ABA@@DBDAHAFE@IEGCA@@@@@@GAAEAG@G@G@IAE@C@A@ENMVUBA@CACSGGEGK@G@E@AHGNU@EAG@IFIBCBA@IAE@@AAQGBABCBABCBABA@E@ABABA@@BGBA@A@AFC@@@ADI@CBABADABAB@B@BAB@BAB@BABABABADEBA@AB@B@JEBADCDCBA@A@E@C@A@C@CBABCDADAD@B@DAB@B@B@DALENILGVKBA@ABA@@BI@A@@DEB@B@BAFAD@@AD@DCBA@@B@BAD@D@HAFADAF@CACAIACAABG@EBCBE@CBC@E@EDA@EBCAC@E@CEAC@EAC@C@E@C@CBC@CBC@A@EAGAGCEGGACCEAC@CBGBC@CBCBE@GBC@CDGDGBABCDCBCFCFEDCFADCDAFAHAB@@@BCBADCBDBBBADBB@BBB@B@BADABB@@BDBBBBBAD@BAD@DBF@F@@BHDF@B@@ABAACAGABAC@CAA@A@@AA@CAA@A@@@AAEAA@EAAABACAEHA@AAC@EGB@CGBAAACACC@ACACAA@CAC@GAEAAACAG@CAEAEAC@A@ABAB@DAHA@ABADA@@@CBCFA@AA@ECAA@AAACCAACAECAAAA@A@A@@BAB@F@FAB@BEB@B@D@FAF@HAD@@A@A@G@A@A@ABABADCDABADCDADAD@B@HAF@D@H@BBBA@ABAAE@A@@BALC@G@G@CBAB@B@BAB@@C@AAACECGAA@CBCB@DA@A@AEO@CCC@A@ABABAFCDABAB@@ABA@AA@A@CAEAA@AACEAACACC@@AE@C@AC@C@EBEBC@EBA@AAAA@AAEAEAAACAA@AAAAC@AA@EAA@AAAC@A@AAE@C@CAAEAAAABA@CBAACA@A@ADC@AB@FCB@@ABA@A@AAA@ACC@AF@BAB@BABADA@@BABE@GCGAAAECCEAEEC@EAEAEACAE@EBC@G@E@E@E@C@GAC@@ACAAGCC@CCGCCGAEAC@E@E@E@GBCB"],"encodeOffsets":[[119649,34083]]}},{"type":"Feature","id":"340603","properties":{"name":"相山区","cp":[116.794344,33.959892],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DAB@@AB@BAB@DBBABDFA@BBBBFBBEB@BD@DAB@BAD@@A@AC@@@A@@@A@C@@@@@@@HA@BB@@AB@@@D@@@@@@@B@@@B@@@@@@@A@@AA@@ACACC@@AAAA@AECAC@ABBB@D@@@@A@@@@@@@@@@@@@A@@@@A@@AB@BA@AD@@ED@@BF@@@@DJ@B@@@@@HCB@B@H@@EDALEAA@AD@B@@A@@AA@@@AAA@@@A@@@C@A@@@A@A@@BC@ABA@@BC@ABABCBA@@@A@@B@@@@A@AAAACA@@AACACCCAC@CCC@A@@AAACACACAA@@AAC@AA@AA@A@C@EAA@A@@@ABADA@@@CBA@A@C@@AA@AAG@C@@@CD@@ABE@G@EBA@@AA@@BA@M@CBCA@@AB@B@DBD@@BFDBAB@BA@ABCB@@CFGDABAB@E@AABCBAAA@A@I@@@A@S@@J@@@J@B@B@@@B@B@BABCDE@C@C@O@G@O@@@KBQAI@A@@B@B@@BB@BBB@D@BAD@BABIDU@MBQ@E@E@MFMFABC@CAGCADA@A@ABABADCBOA@@@@@DBDE@@BC@BDOB@DA@BFABCBCDA@ABA@ABABABIDAD@B@D@@BD@B@@GBBBEBBBCBBBA@@B@@DA@BC@@BF@@@@B@B@@BD@D@@H@F@F@DAF@HADADAJDDDD@FEL@F@DFTCHAJCDANGFAD@D@BHLDRIJCHDHFL@H@RDB@B@DA@EHDFBJDH@FGJ@VAD@L@RA@AAEB@FAB@FAJCBGBA@A@CAAB@D@B@BA@@@C@@@AFA"],"encodeOffsets":[[119609,34806]]}}],"UTF8Encoding":true});}));