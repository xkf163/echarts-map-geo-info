(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('大同', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140203","properties":{"name":"矿区","cp":[113.177206,40.036858],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@HOHMHMDCBA@@BAJGRIRMEGGGK@MDCAA@CCBIDEBCBCDEQAG@ACAA@@@@IGBDA@B@@@@@@@@B@FAB@BABA@C@@@@@A@@@@@@@@@E@CB@D@@FDB@DB@DCDA@@@@@@@ABG@ECCCA@GBQ@A@GBI@A@K@A@A@EAACCA@ACACAEACBABCFADADABABABCAGECF@@@H@@CHGFG@QBGAC@E@C@MAC@A@@H@DBD@@ABE@ABFBDBBDE@EBE@CBC@@B@DDBDBDDDDDBJHB@F@H@NGBADAF@L@JCBCDAFBFFDBDB@@FBJCFADBDCDC@@@F@DCBEAE@ADDDDB@FF@JHL@B@NAJCD@F@BDBDADBBDB@@@B@DC@ADBDFBHDJ@JCHCFGBA"],["@@@BADGBBHDBB@@BB@BDE@BDB@F@GDCBCP@NFJDDAJADADGAABPDJBLBBDR@D@BALHPFAH@BBBD@FBB@FDD@PIPDDCOERGZDZFbRLJ@BB@FJ@@GFFDD@@CAABAF@LCFADACAA@ACDAtQXGPCD@B@NAHADAH@LACJ@FADAFH@@@BC@@B@D@BE@EDABADAJ@D@BA@AGAI@IBCCCCCBE@AAM@BKH@BCE@EA@B@BAHCHAACB@DA@IDCDA@OFkNcL@CACBAEAAAAHFFE@AACACCEACA@BC@A@MMkOQEgPCCCBA@CAGBQEQGICIA@CI@@DGBIAAC@EBI@EGG@MBOBAF@H@@CCKCGAIAICECAAHEBA@BLPA"]],"encodeOffsets":[[[115937,41046]],[[115680,41010]]]}},{"type":"Feature","id":"140202","properties":{"name":"城区","cp":[113.298026,40.075666],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@@NL@@@@@@J@JK@@HQ@@@@@AAJC@A@I@E@CF@@G@@@A@A@ACBA@C@GBE@A@E@AAEFEBGDHHFB@@AB@@A@AB@@@B@@CFEC@ACAAA@@@@@A@@A@CA@BHDCDBB@BLHCDB@EFGEOPB@AD@@ABDBB@HLB@@@FFN@@D@D@@CBBBHDPJBDABAB@DBDCBBBA@@@A@CA@@EFGEADTN@@@DCF@BBB@@XDD@@@DC@@@DH@BF@@IAADJBABABU@APB@\\BF@@@DAD@@@BB@A@@@C@A@@BA@A@@@GBC@C@@BC@@B@BB@BBDBB@B@@F@@C@@AA@@@A@@H@B@@@@@@@BE@C@E@CBI@@@@H@B@@@@@@@@@BGBE@C@@B@@A@@@E@@@AEB@A@@@@@@@A@@@A@@@@@@A@E@@@@@@A@E@@@E@@@C@A@C@@F@@@BFA@@D@@@@@@J@@@@@@IAE@@@@E@@@@@@E@@@@@@F@AA@A@@@@@@@A@A@@@C@A@@@ABC@@@A@C@@@@@@C@G@@@@cG@A@E@A@K@@@@M@@K@JOCAGJCHA@@@"],"encodeOffsets":[[116012,41004]]}},{"type":"Feature","id":"140212","properties":{"name":"新荣区","cp":[113.140004,40.255866],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@PFJ@LBLBPFJBHBFDNDLBB@LBN@ZFL@PBJ@FBB@LDLBLBH@NDJBPFD@NDPDJBVFFBNDRDZDF@JDX@PBFBJBJDB@JFLDHBHBJCBCBI@CBC@AHGBABA@@D@DAJEDCBADCBADEBA@ABABCBA@ABA@A@AFGDEBIBCFQDIDEFMDCHKHGFEB@B@D@@@HAHDLBV@JA\\CJAJ@PBN@TDPDHBR@J@JBJDN@NDXDJBR@JBR@FBAE@EDKHWJIFCFABEBGFGHGJQDK@ACA@@@@BABABC@ABA@A@A@A@CBAB@@CBA@A@@@A@@AAAACACAAAAAACAAABA@@@A@@AAAAA@@@@AAECIEC@@C@CA@@AC@CACA@AC@CA@@CBA@@AA@AAA@A@A@@@ACA@ICA@A@@AA@@@AAMIMKIGSKIICCEICEA@@@AA@A@@A@CAA@A@CBA@@@AAAA@ABCBA@@BA@A@@AA@A@@CA@AA@@AB@BC@@@A@@@AAC@ACAAAAACAC@MECAGEGACACCAAAC@C@A@AAAAA@D@@CF@@@@A@@@AA@@A@A@A@EDA@CBC@EBO@CBC@A@A@@AAACCAA@AAA@A@@AAA@A@C@ABA@A@@@@B@B@B@BAB@@ABA@@B@@E@CB@@A@@@AFAB@BBH@BBB@D@@@D@B@B@B@B@FBDBDB@BBF@B@D@@BB@@B@B@BAB@D@@A@CBG@A@@@AD@B@@@BB@BD@BBDBDBDBBBB@@@B@BDHDFBF@BB@B@B@FCB@B@BBB@BBBB@BBD@B@BB@FD@BBDBDDF@B@@@BA@E@CBEAA@I@C@A@A@@B@@@B@B@@AAA@AAA@CB@@ABCD@@A@C@AB@@@@@BFFDDBBBB@B@BABAB@BA@@B@BBB@B@@GHCF@B@BDH@B@B@@A@@BA@EDCBA@ABA@EAA@A@AA@@CAAAA@AB@BEF@@ABCBCBABAD@@ABA@A@@@A@@@@B@@@@C@@AA@@BA@@@@B@D@B@DABAFAD@@ABA@ABA@A@GA@@A@@BA@@BA@A@@A@C@A@AAA@@@A@ABE@@@AAA@AAAA@B@DA@@@@@A@@CAA@A@CDABA@@@A@C@AA@A@@B@BA@@@A@@CAC@A@@AGCA@C@@@AA@@A@@@A@ABA@@@AA@@AABABA@@@@@@@AAA@@@AEB@@AA@@@@D@@@FA@@BA@@A@@@A@AA@@AA@@A@A@AB@BABA@@BA@@@@A@A@A@@@ADCAACBAAC@A@ACCA@A@A@@FAFAB@D@BAA@@A@@B@BBBBD@B@D@B@B@@@D@B@@@D@@@FCB@B@D@D@BA@@BA@A@@@@@@B@@@@BBBABBB@@D@@@BA@@@A@@@AB@@ADAD@DCB@BAF@DBD@@@@AACGK@A@EAACAA@@C@A@C@CAEECOCCCCA@C@EBA@@CAEE@AC@@ACB@@AA@@BA@@@@A@C@A@A@@@BA@@@@A@A@@@@@@A@@DAB@B@BA@@@A@@@@AA@A@@ACA@AA@AAA@CBCBEAAAAAAAAEEIECA@@@A@@B@FC@@@@BA@@BABA@A@@@@AA@@A@A@IDC@A@AAC@A@A@E@A@EAG@AAA@A@@AA@@AAC@ABAAA@@@AABCBAB@@@AEAA@AAA@@@@A@@@C@A@@@AAAA@C@A@@@AB@BA@@@CBA@CB@BA@GB@@A@@B@B@BAB@@@B@@@BA@A@A@CACAA@AA@@ABA@A@@@@B@@BB@B@B@BABAB@@ABCAE@C@AB@@@@A@AA@@A@@@AB@DABA@ABA@@BAB@@EAA@@@@@AB@B@B@@@@A@A@CA@AC@A@A@@@A@@ABC@A@@@A@A@AA@AC@@EAAAABAA@AA@@@C@A@@AAA@AA@A@A@A@AB@@A@@@A@EC@@A@@BAB@B@B@BCF@@CB@@C@E@E@@@A@AA@@A@CEAC@@@A@@A@A@@BA@@AA@@A@AAA@AB@BABA@A@AB@AA@E@A@@AA@@CBA@@@AB@BBDA@@@@@A@@@@G@AAAAACCCAA@@AABABGDA@@@AA@@@A@A@A@@@AA@AAA@A@ADA@ABA@A@ABEBA@AAA@@@@A@@@A@A@@A@@@A@AB@@AAA@@BADABA@CBGD@@A@AA@@A@@D@@@BA@@AA@@AACBA@E@A@A@C@EBADC@@@AC@@@ABABA@@BABA@AA@@A@CCAC@A@CAAAAA@@BABAD@B@DABCDCBCDAB@@CD@BEBC@ABA@CAAAAAAA@A@@AAA@@C@@@AA@@@A@A@A@CBCBA@@@@@@AAA@BA@A@@@@@A@AAA@A@AB@@AD@@@B@BBB@@B@DAB@@AB@@@BBB@@B@@AB@@A@@@C@A@@@@B@BBB@@A@CDA@AB@@@B@@@BFD@@@@@B@@@@A@E@EBI@A@C@AB@@ABAB@BA@ABA@AACACAAACACC@@BABC@@@@B@A@@@E@A@EB@BABADAD@@CDAB@D@BA@BB@@BBHDB@DB@BB@BBDFBB@B@B@B@@@B@BC@A@C@M@CBC@C@IBCB@@A@@@@BB@BB@B@D@@AF@BAD@BAB@D@B@D@D@B@B@D@DCD@@@@EAA@ABCBE@GBIBABE@A@GB@BKL@TC\\MPOJSHMLBDBHDFDLBJDJ@BDFBHBHHN@L@NBJDHLFJBHBJDPDFBBBJBJDJBNDJBJFNFF@ZHHB"],"encodeOffsets":[[115694,41324]]}},{"type":"Feature","id":"140211","properties":{"name":"南郊区","cp":[113.149693,40.005404],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@H@D@@@@@@@@D@B@@AD@B@@@B@D@@@B@B@@@@@@@BBBE@@@@@@@@F@@@@F@@@@@BF@J@@@@I@@@@@@@@CB@AE@@E@@@@D@B@D@@@F@@@F@B@@@@F@B@@@@@@@@B@@@B@@@@@@@BFA@B@@@F@@@BA@@@@DAFAH@@@@@@@@A@G@@@@@AJ@D@F@DAF@@@@@@A@G@@@@B@@BB@@@DDBBJHHIDLF@FAJ@JBFBD\\E@AAG@ABABE@@B@@@DAF@@@@AB@BA@@BA@A@A@A@A@@B@B@BAD@B@B@BB@@@BBB@BBBDDBB@BB@B@D@DAP@FAD@DAB@FCB@B@B@@@BB@@B@@@@@DE@@@C@@AA@AAC@AB@AABABC@A@A@CBABADCHEBABABAD@BAB@BABA@ABABG@C@A@AA@AEAA@A@CAACCAGAA@ABC@A@@BADEDGBCCAAA@@AAA@A@@AA@@CG@@A@C@A@AA@@A@A@@@AA@AA@A@AAE@C@CBA@CBCFKFCDEBADCBC@ABAAA@CA@AC@A@@ACAK@AACA@CE@@ICCCCAAAAA@AAACE@CAA@CAGAAACCC@A@COECHOLCDOLIJEFFJCJELAPUNQX@d"],["@@@C@@SMBCHFFE@@DBB@@@B@AADAAC@CBABAACOIGCAADA@@@C@CM@EE@@A@GKA@CABA@@BCA@POHFFEA@DCKG@AAADCGC@ADBB@@@@B@@@@BBDB@BFDDE@@@A@@BAB@@@BA@@EAGGHCFAFEBBF@B@F@HAD@B@DA@B@B@B@@@HE@@D@F@J@BIDBB@@@@R@@GL@@I@I@@@@K@@MF@@@B@DGHIDBIPL@@@@N@@L@B@F@B@H@RWVMBOFKDIEIFEJIPKDCPKDGPFCGCEACAE@E@GBEAGAABA@ABCB@@A@EB@@ABAB@B@BAB@BCBA@ABADCDA@ABA@AACBABCBADC@A@A@CACAEAACA@A@@BABA@AAA@A@ABC@CB@BA@AB@BEBADABCB@BCBCBC@AMAEFGPCHSBM@OAGBMNGHGFOPEFCDIBWBKBEDGJMFGFSDSDYFGBMBMBMEB`@NB`E@AAA@@@AB@@A@A@@AE@C@EB@@@@A@AB@@ABADAD@J@BA@@DAD@BEFCD@@@@@@AD@@AB@@F@@@@B@@C@@J@@@@BFDDFDH@BA@@@@@@B@DC@CCAA@EC@@@CDAF@@@@@@@@@B@@@@@D@B@BA@ABA@E@A@@@@@@A@B@ACJH@@@@BBBDH@RBCFADADCFAJDDB@DBNCL@HHFHQNQJIHAB@@ABCDGNGNGPABEHCRAJANATATAjBB@B@@@B@D@@@B@@B@BBB@FB@B@@BADABA@B@@BBAB@BBD@BB@@BB@B@BBH@FBB@F@B@B@D@BBB@D@JCB@B@@@BB@@@@@BABAB@@AB@@@@EDA@@@@B@@DBJFFFBBBBBBBBAFAD@DBB@BBBB@BD@@@BBB@@@@@B@@ABA@A@CB@@@B@@@@B@B@@@@@AB@@B@B@D@B@@@@@AB@@BB@@DA@BD@@BFFDB@@AB@F@DDBDDPDFDBF@D@D@B@DB@DBBB@F@BHLBD@B@@C@CAE@ABA@CDC@CB@BA@@B@@@B@@AB@@C@@@AABAAA@A@@A@@@@@@@@BAB@@ABC@C@A@A@ED@@C@@@A@C@@@A@A@C@A@C@AAAAA@@@@BB@ABC@A@EBEB@@@B@BDBBDB@D@BBDABBCD@B@@@B@B@B@@B@@AB@BA@ABAB@B@@@BB@@BBB@@@B@@@AB@@EB@@C@@@@@BB@@FA@B@@BB@B@@@@@@ABABBB@@BB@@B@BAB@@@B@@@BB@@D@B@HD@BB@D@DB@@@B@@ABA@@@@BBBD@B@@@B@BADCB@B@DB@@@B@@@@CBA@B@BB@BBB@B@@AF@B@B@@BB@B@B@D@BB@B@@AB@@AB@@@HBB@B@BAB@BA@@BCBEBA@C@A@C@A@@B@@AB@@BD@@@@@@A@@B@@@B@B@BA@@BCBADADABA@@FE@ABAB@BBDB@@BBB@B@FBB@BAB@DAFCB@@AB@@@@A@ACG@A@ADEHG@@@AAA@A@AB@@ABABA@A@AAAAACCEE@A@@@@BAD@B@@@DCBA@@DAB@BBB@BB@@@A@A@@@AB@B@D@J@B@FBDAF@B@@A@@@ACEACAC@AECA@@A@AAC@AAAAAA@AAA@A@EDA@A@A@@AAECECG@A@A@@AAAAACACAC@AACA@@A@@@ABC@@B@H@DAB@@@@CBA@A@A@AA@@AC@A@E@AAA@ACAC@E@A@A@A@A@C@@@CAA[FACAE@IBI@EKEJCGGAICAE@@@@AAAAC@AAAA@@@AD@@@DAD@H@@@BAB@@@B@D@@@BAA@@C@CB@@E@[AA@BOV@BABAIABCJB@@AEG@@C@@CD@@C@WC@@AA@ADE"],["@@@AB@BBBB@D@BBDDDB@@@BBB@BA@AB@BABA@@D@@B@@CDAB@F@D@B@B@FABBD@BB@@BB@@A@@@CB@@@BBB@@@HCDAB@BABC@AB@BB@@BAB@@@B@@@@B@B@@@B@@B@BBB@FABAB@B@BAB@BCB@B@BBB@@B@@@B@B@B@@BB@@B@HCBABA@BB@DBDDBBBB@B@H@@B@@@@@B@AC@ABA@@B@DA@@BB@@@B@FBBA@@B@BABABA@@BBB@B@BB@@BB@@AB@B@@@@B@@BDDFB@@@BBB@@@F@F@D@@@DA@@DE@A@A@ABA@AB@@@FDB@@@B@@@BAB@B@B@B@@BBB@BB@D@@@B@@BBBBABBFB@@BDB@@B@B@B@@@BAD@BB@@@B@B@D@@BDBB@B@@@@@@A@ABA@@@@B@FB@@BA@AB@BAB@BA@CBA@@B@@@BBB@@@@@BAD@F@DBBA@@BABA@A@A@AAA@@@A@@B@B@BA@@BBB@DBDBB@B@B@@A@@@A@@BA@A@A@AB@@@HAB@@ADAB@DA@@B@@ABA@@B@D@B@BiBSBSBMBIDQGDIDI@GCEAACBCD@@C@A@@CAAABCACACE@C@IDMBA@K@IGE@@ECACCBCF@FBDA@C@E@@CDCDCAEBIDEA@@CACAEEEACBADIDK@E@CBABMHG@E@A@IGCACCCCCACA@CQDOTMRGJ]flPNNB@D@@ADBFBDDDBBBF@EEBGBBFBABBD@DdKlMPEB@DCJCB@@CDABBDGBG@A@AFBF@ADG@ALN@BBF@DADDDDJAJ@HB@BABC@I@CBABCB@FAFC@A@@@AD@@G@BEBC@EDIKBG@CBGBMBA@C@ODWHsRCBBDB@DBCBEBKDE@ABBB@DC@ECHE@@EIA@@AKIaQYESd"],["@@BAF@BA@@AC@C@GB@D@NBD@F@D@HBRAH@HEDG@@@G@@DEHFDBBABABABCBCDEBADAFBDBDB@BDBBDFBB@B@L@B@J@HAB@R@HAB@AE@@@@@ID@@@@A@@E@@@BA@@BC@@@@@@DCFE@ABC@CB@@A@IBCBCBA@@BAB@@@@@FAD@F@@BB@B@@@BA@@B@BBF@A_@MA_IGOEKEIIKIQIMGCAMGCCIGGAICQEG@KCO@U@I@_DqDODSBOBE@K@I@UEIAE@G@GBI@W@SAI@MEI@E@I@IFOJG@ECCEAKHK@C@AEEGFKLMDEHGCI@IBKDCRCHGFIFCDFJTRHFDED@ACBAFAB@FBDABBNBDABBBBBFJBTDHBBBPFNHJLFLDDDJBJBN@D@DAFGDADEDCBMFKBOCWA]FGJBHLFJH@F@F@BBBCF@DBB@DADA@GFGHAB@BABCBAD@BAB@D@DBD@D@D@DADADABBDDBF@DBHBBBH@B@BBDHBB@BG@EBG@@BC@@DPFL@PBLDD@DBLBDBBBBB@BDF@B@D@F@DBB@BDBD@BDBDJPDH@FBB@BDD@BBDBF@B@@ABADCBA@A@A@C@A@A@@@@@ADAB@@DDDBBBDBDBBBB@BAB@@ABABA@@BAD@B@J@FAF@B@@@@@@A@@@@EC@A@@@A@@BAB@DCB@@@AA@A@A@@B@D@@@B@@@BA@@@AA@AA@@A@@BA@CBA@@@AA@A@A@@BC@@BAB@B@BBB@@@@@B@B@@ABB@B@@@@B@DADAB@B@B@@@B@@B@@@DB@BB@@@BBBBBBBDBB@BAD@FA@ADC@@BADCDADCBA@C@ABCBATcYCQHPFCDOCOJC@ECA@EAC@AA@ABGOEKGABC@Q@ACKAIAOCBAHBBCBCBICCEI@MDODAHCE@A@ACF@ACA@@AA@CAAGHABC@AOBAKB@FABGDBDFBJBJDHDL@DG@E@ABAP@NHH@FAJ@FBDJBHA@CJ@@DJBJDRHRFHADBB@DADDhORF^eHINQPSRC@AD@DAF@FAF@ACCAEA"]],"encodeOffsets":[[[116037,41029]],[[115991,41082]],[[115751,41087]],[[115813,41013]]]}},{"type":"Feature","id":"140221","properties":{"name":"阳高县","cp":[113.748944,40.361059],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@C@C@E@@@ACAAAA@AACAGAG@C@AAMAKCGCAAAACACCCAEA@@C@A@@@ABCDABCBADCB@B@D@D@B@B@FBF@B@BABADCDCDIH@DCB@B@D@BADABAD@@ABA@MFABA@CBCBC@GBA@CBIBCBC@EAEBA@AA@@AAA@@CACCGAG@A@ADEDCBA@AAC@A@ABE@ABG@CBA@E@@@C@A@AA@CC@@@AAA@E@A@AAA@IAECGEG@@MMIEECAAOGMAQ@QBKCCCAACEAE@GHKREFDLHH@LAHADEFAJAJCJAH@H@LCBALAB@J@FAB@BABAD@BAD@D@B@B@DDFAF@DCB@DB@@D@@@HCFEBAB@AO@IAK@OJK@A@ADK@EFKJSBAFQB@@AGAC@GDURKFSBIAGEEECASEICGCIEIEMIIMCEKOCKCGFILSHQGKY@IMGCKAK@MRKDWISGG@OAKCOCKCICEDIJKPILILGLHNFFHH@@FFB@BBFHDDB@@B@BADAF@FBFFJFJ@BHH@@@BBB@B@B@B@J@FAD@@@BAB@BAHADAB@D@B@BAB@B@B@H@B@B@D@@@FBF@BBDB@BBFBB@@B@BBB@B@BBBBB@@DDB@HBD@BF@@@B@BCD@BABGDABEBCFCBA@@BE@ED@@AACCC@A@ABAB@@A@E@A@C@A@A@ABAB@FA@@D@D@B@BBB@BB@BB@@D@N@F@F@H@DB@@BB@@@F@D@DBB@BDDDJ@@BBA@@BCDA@ABAB@@AD@BA@ABABABEB@@AB@@@B@BBB@@AB@BCBAD@@AB@@@B@@@B@BCF@BAB@@@D@BAB@BCNAD@B@DAB@@CA@@A@ADABCDEBADA@ADEHAFA@ABEBKHED@@GBA@KDA@AACAAAC@A@EBKBC@@@G@E@C@G@C@AB@@EAAA@@C@CB@@AB@BAB@@AB@B@@@BAB@@ABCBCBA@C@EBA@A@AD@B@@@@CB@@@@@B@BABA@CBEDA@CBIBKBEB@@A@C@A@A@CAAAA@A@ABCBA@A@ABCAA@CAC@C@C@A@@@ADABE@@BGBCBCDAB@BAD@@@BA@A@E@@@AB@DA@@@@DAB@@@BA@EBGBEBEBCBCBCDC@CBA@ABCBGHEDIHCDAD@B@B@B@BBF@BCPAF@BAD@B@B@BBBDD@DBH@B@@C@A@@BB@BDB@@@@B@@C@@B@@@@@B@@@B@@BBHFBBBBBBBBB@D@B@B@@B@@AB@@@@CDCDABC@GBCBA@C@@@CBCBEBCBA@EAG@C@@@@BAB@F@BA@@BE@ADC@@BA@A@@@CAA@C@AAE@E@GCGC@@E@C@A@ABABA@CBC@@BA@A@CBCDAD@@AB@@AB@FA@@DCFCBAB@B@BABBBA@@BAAC@A@@@A@A@CBA@A@A@@B@@@BAB@DA@AB@D@B@B@BAB@BADABAB@@@@DB@BCLIRGHEHAHAFEBEDIJGXCL@FBFF@TBLBRDNBJBHBF@HBZHTFPLJHFJFHLJDBTPHDFDLHJFFDFBNJBBDDPNLHJFNF\\JHNBLDFJJRHNDZJTFLDLFLBXJPDPHLFRRLPNRDHDHBFAJLKTSLGLGJELIJIFIFIFGJOJEPAVFPFPHFFNJRLJHNHJF@@LFJHHJHF@B@F@BBBDB@BBB@@BBAB@B@@B@B@D@@@@AB@@@@@@@DAB@@ADADC@CBABAD@DADADABAB@@@ACDG@A@ABE@A@A@E@A@G@E@CBADGBODOJKBGBE@I@GGKGCGEEAA@GAE@CAAAAAAC@E@A@A@CA@@AKAE@E@E@E@ICA@EC@@CAA@AAAAAAAAAA@@AA@CAEACAGAA@@@ABADCBC@@@A@@C@AA@@@AAA@CAC@GAC@AAA@ACC@CAC@CAOAK@ABC@ADEBABCDADEFCDADADALABAB@@AB@LCB@HCDA@A@A@EAE@C@ADIAQAACKGOGKCIBI@CDOFGNSCIEIFIDAHCDAFCBA@@@A@@@ACAA@A@CAC@AACCCC@A@@@A@@B@B@BAH@F@P@FEB@H@DARIHKHGBAJKJGJCJFFDH@B@BAFAB@@CBA@@FABA@@DA@@BABA@@@ABAJKDCDABAHAFAPEJADALAFAD@F@DABA@A@A@MBADK@CBA@ABCBCBABADEFCB@DGFEB@@A@E@CBG@@ACKKCCCG@A@C"],"encodeOffsets":[[116830,41046]]}},{"type":"Feature","id":"140222","properties":{"name":"天镇县","cp":[114.090867,40.420237],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HMLKJKX]JIFCHGFIDG@GBEDEFGFADABAJELEFIHI@@BCBG@CFEDABABCBA@A@A@AECCAAAAAA@BABE@ABA@@B@D@B@@@BCDABABA@A@@BAB@BABA@EJCNEL@H@HDJDH@HEFENILGBADCDEBCACCMGK@A@@BCBA@C@A@@@@CA@@A@@AB@@ACE@@@CA@@A@@BA@AA@AA@A@@BA@@DAB@B@BAB@@@B@B@@@H@DAB@B@B@B@BBB@DC@@@AAA@A@ABABC@CB@@EAA@AAACCAAA@CCECAA@@@A@ABC@C@A@IAABEA@AE@A@AAAEEA@@A@ADE@@BA@A@@@AA@AAAAA@@AA@EAAA@@A@@ABA@A@A@@@@@A@@@A@@@A@@BA@@AAAAA@AA@@CA@AAAAC@ABABCBA@A@A@@@@AA@A@A@ADABC@@FC@@B@B@FBFBD@@A@@@A@C@ABA@@@ABA@C@@@@@AB@F@DABAB@FAB@@@@ABE@E@@@ACCAAMEACA@@AAE@A@A@A@ADABAFGBABA@A@C@ABC@@@ADCFKFIFIBC@ADKDEBG@EDEJEHAH@JBLBNDF@HC@BB@B@B@@AB@@ABAD@BA@@@@B@F@B@@@BABAB@@ABA@@B@B@BBBBB@FB@@DAB@B@B@B@BA@@@ABA@A@A@E@@@A@@D@B@B@@@@@@ABAB@@AB@DBB@B@BAJDHBHDFDDFBBFBHDHBNBHDHFHBH@JEFEFGDIPKHCFANAL@JDPHLAJ@JALCJCFCDA@C@MCICOCEEGU[OKGEGCOOWUKKMEKEMEGAQCOCWGMEIAKASASBYFKDMAOCYCSEA@OEIEAAEAIESCQBWBKDGBOBKAGKKMES@MAMCEIAEACAQBA@SDA@UAKCMASGQGOECAMEQC@@C@@@AB@@CBG@CBC@A@@BA@@B@@DB@D@@@B@D@D@BA@A@A@E@@@A@CBA@ADCD@@A@CAA@@@@@AB@@A@A@A@AA@@ABA@A@A@@@CC@@A@@AAACAEAE@OCGCKGA@BC@@HO@CB@@@@A@AB@@CBA@CBA@C@A@AB@@AB@BEBICBE@C@EBKBCBIBOFEBGBABCBCDILAB@B@@ABAB@@CB@@ABEB@@AB@DA@EBABA@G@ECIEIDIHILABGHGLQJCBG@A@EFO@E@G@ABA@A@@@@B@@@BDDDDBBD@DBB@B@DB@B@@@B@@ABEDCBGDCBEJFJDJMTEHCP@DAJDJHLHPDLBBBRCJ@B@DBF@F@B@BCBGDA@KDA@@BA@ABKBCBCBCBEDCFCBADABCF@BAD@BBLBP@DBD@DDD@BBB@BBD@HBD@DBB@B@@BBD@@@@B@@ADCDAB@B@@BBBHBDBF@DBB@@BBBBBBBBBBB@DB@@FDB@JDF@F@F@F@LB@BB@@D@B@B@FBDBBBBDBF@HBB@FBHFHDHL@H@JAFAHILCPAPCHAB@D@F@H@B@F@B@BAF@B@BCHBD@@A@ABCBCBCBC@ABAB@DCDCB@BA@CB@@FDLDRDHBJ@F@J@H@DAH@LAHIJ@NDNDLDJBHBJBJBNDLBLLJHHHHJBN@N@JITIHIHOFGFGHEFEFCHADAHFDFHDFDDBFFHDDDJBDBNDFBDBHDFBFDDBD@F@D@D@B@FBJBFAD@BAFADALADAFCNAF@DDHBDBDDBDFFDDBJFFDHBJDNBLBHAJBF@HBL@DBJB@B"],"encodeOffsets":[[116874,41716]]}},{"type":"Feature","id":"140223","properties":{"name":"广灵县","cp":[114.282758,39.760281],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@_AOOKKUGKIMCIFERCLEJINMJMHKHKAS@OAC@S@OCGECCCSCKG@eJQ@O@QJGHEF[BWAMGICC@KEYCWDGFEDMLELKLBDDHBL@LIJCDINKRABIRCL@B@@ETCJIDGF@HIPQFEBCBCBEJINKLADKPCFBL@JCFADOJ@@@D@F@F@DDHFTCHEBIDMDQJIDGFGJJDLDPDLDPBH@THXJLCNQL@LBHDJNZ@HLGRKTEJDHDLLPDFJNNJJFJFHDJDTFDBFFHFJBTALEVQHCD@HBD@DFFDFBF@H@H@FAB@BAFCHCBCDADCDAH@H@FBLBPAPCTEPENCNATAJAJAJ@JBB@FBJJHFF@F@FBFBDBBBBB@BBBDFBB@B@@BA@E@@@@B@@@BDB@@@B@FCBABABA@A@@@A@@A@@@@A@A@AB@B@@@@@BB@BB@@ADA@A@@@A@@A@A@A@@@@@BC@@B@B@@@BCBA@A@A@A@AAAA@CB@@A@@AA@@AAAAAGACACACACAGCAAAAAAAAAAAA@A@A@CBCBA@ABAFC@@BB@AB@BA@@@@@ADCBAB@@@B@@@@@@@B@BEB@@@@@FB@@DA@A@CBCBEBCB@@AB@BB@@@B@@ABAB@B@B@@DFB@@BB@J@DBB@B@J@D@B@DDB@HDDBB@F@FBF@DBD@FDD@@@DDBDB@D@B@D@BAB@DABA@A@@@AAA@@@E@ABA@C@@@ACA@A@@B@@AD@B@@@BBB@B@DBB@@BB@FBHBHAB@DC@@D@FBBAB@B@DDHDDBBBD@B@D@DCD@BAH@B@B@D@B@D@D@B@DBHBHBB@D@@@FBD@B@B@@@@@B@@@B@D@BBD@F@D@BD@@B@@@BADADA@@F@D@FBDIBEDEC@@EBA@E@CAC@ADE@ANO@A@A@@A@CA@A@@@C@@@ACA@@AAE@E@AAA@AAAAAC@@@AB@DCBCFC@CB@AA@ABG@A@C@CB@@ABABABC@CBA@@D@@B@@BEF@@@B@CG@@@AB@@E@@B@H@BBB@@@@CBE@C@AEGACCG@IAKAU@CAM@M@IAKBK@[AQBU@OAIAMDOHIUAYDULMDQAQEUAU@SCICQGOWAIBMMEMCSB_D"],"encodeOffsets":[[117004,40569]]}},{"type":"Feature","id":"140224","properties":{"name":"灵丘县","cp":[114.23435,39.442406],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@C@AA@@A@A@@@AAA@A@@@E@@@ABCBA@A@A@A@AAA@CAC@@@A@@ACAAAAA@@@@A@ABABCBEBA@A@CDAB@@EA@@A@@BCBA@ABCAA@AAA@CACA@AC@C@A@A@E@A@AAC@C@C@AAA@E@@@CA@@@@CBA@@@EBG@@@A@C@A@C@AA@AA@CAAAA@ACCAA@C@C@A@A@A@@@A@@@C@AAA@C@CBA@OKYMQGMCQBIHGFIFUDWGICGCSCcBGLCHCP@LGPIDGFCBA@A@@@@@@@@BB@@B@@@@@@@B@@@B@@@@A@@@A@@@@@A@@@@@@@@@A@A@@@AB@@@@@@BB@@@@@@A@@@@@@@A@@@@@@@AA@@@AA@@@@@@@@@@@@AA@@@@@@A@@G@@@A@@@A@@B@@@@@@@@A@@@@@@@@@@@@B@@A@@@A@@@A@A@AB@DCJAFELCNCTAJCJOB[GQG]ME[EOKKU@KBWFID@FAJAD@@@@AFENENAN@ZCFAFENATANEP@LALEHDJBDNNNHJLDNBPDNBHBJBP@J@DBLBFAJGFIDMJIHAFCNCHGHMJOJMLCDIFMLIL@J@LDHDN@FBDNBRBD@BBRHRFJB@@B@FBVBJLFH@B@@@@@DBF@D@H@JAN@B@@@@AFG\\@HCLAVDX@F@TILGHKFMBMGC@KL@D@BAJANAH@H@FBNAJEVGLAD@T@DHZCPIPIHABA@CDAR@NFNBFDHFFJFDBB@FBJ@@@@@NAPILEJCJCDBBBFDBBJJJPLKFKNKFCHEXCZDLFD@JDNHXB\\AFEHGRIP@R@fIH@DLDTDDHFPDT@D@PBT@LBLGNGNIJMFIDKFQJENDLJVHLLPP`B`CTANDNFANBJPXRHJDTDV@VBRFRBNCVKZCVBFMHGFIDEFGHODE@@B@JEN@LBRA`FNA\\ILK@CBA@A@@BABA@@BA@C@@@A@@@AA@@A@@BABE@@BA@@@A@ABA@ABC@CDGDCBCBIR@B@@BB@@AD@DA@@@@BB@@@D@B@@@@DBB@BF@@@BbNLDH@JEFICG@AAAAC@ACI@A@ABA@@@AAAIEAA@A@ABA@ABE@ACG@@@A@C@A@E@@@A@@AACCCAC@AAA@AA@ACCACCCAACECCA@@A@@@ABA@@@A@C@CBE@A@AACA@BCA@@A@A@A@CA@AA@@@@AAAA@A@@@A@@@AA@@@AAA@IB@@CA@@A@ACCAAA@@A@AAAAA@ABA@ICAAA@AB@@CAA@BA@@AA@EB@BCBA@CBAA@@A@@@AA@BA@A@C@@@@AA@A@AA@@A@AKaCGAAIKGEMOGIEGCO@KAKDK@OBKBG@ECKACBAB@BAD@HABAB@@AB@AA@@@CAA@AC@CAAA@AB@@A@@A@AAC@AAEC@@@C@@@AAA@A@A@@@A@A@@A@@A@@ABA@CAAA@@A@A@ABEB@@AAA@A@@AC@AA@A@@BA@@AC@C@@@@AAA@CBAAC@AACBAA@A@A@@A@A@@@@@A@AA@A@C@EAA@ACAA@@A@A@@BABA@@@ABC@ABA@@AA@@@ABCAAC@@ACCAAA@BA@AAACC@@@@@A@AB@@A@C@AA@@A@ABA@ABE@@B@@AB@@A@AB@@ABA@@@A@A@@D@FABA@@BA@A@AAACA@A@AC@@AAA@@AAA@@@@@AAAEA@@A@@A@C@CAA@AAC@AA@@AAACB@B@@AB@BAB@B@BAB@@A@@B@@A@@@@A@@A@@@ABADAB@BAHABAB@@@BA@@B@D@@@BAB@H@BBDB@@@AB@@AB@B@B@B@B@@@BAB@@A@@@@DCB@@@B@@@BBBBB@B@DAD@B@@@@CB@DCB@BA@AB@@@B@@@BA@CBA@@AC@AA@@A@A@@AA@AAA@@@@AABA@C@A@@@@BA@A@A@@AC@AACAC@@AA@@A@A@AA@@AABAAA@AA@@@A@@@GD@BA@A@ABC@ABA@@@AAE@@@A@CC@@@A@A@A@@AA@@@A@@BC@@@CAC@CAA@CA@@@E@CBA@A@C@A@A@@CA@AAA@A@@BA@ABAAMCGBODK@IBODQQKSGMACAAIOCMFCB@DEBA@C@A@ADE@AAC@@@ABA@@@@@A@A@A@A@@@A@AB@AC@A@AA@AA@@CCAA@@@AA@AC@@@@@AAA@A@@@A@@B@AC@AA@@@AC@AA@AA@@@AAA@AAAAAAA@@@@@AAAA@AE@@CA@@@A@@"],"encodeOffsets":[[117094,40015]]}},{"type":"Feature","id":"140225","properties":{"name":"浑源县","cp":[113.699475,39.693406],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@I@EAM@IAIBKDC@A@IBI@E@A@MBGBG@EBGBGDGBGDGHEHELA@@DELQPEFEBGBEDIBCBQBIBMAGAIAIAIAOBEBKBQFIHGDEBA@GBMFEAQCKCQCG@MEOEKDADABCHADADGJEBQEETIJULOHC@MHMFKJOJGDGLIJADAJAJBNHR@BGROPEFWVUHCHCDCFADADEPIHA@IBODY@ABADAD@D@BBH@B@B@@BLCJMNABCDABCDEHABABILOLOHEFIL@JHHFFHFANEDABEH@D@D@BFJBBHHDBADAB@B@@D@JHFB@BCFBBBBBB@BB@DDBBBB@BB@@DBBAD@D@BIJAB@BB@BB@BHB@BFDBBFBFB@A@EBA@A@EBABA@ADABA@@B@FCHAFADADDHDD@DABADBT@HBFBHBDFBFBD@FBH@LBT@N@TCJCHFPHJDDNNRJJBPBDBRDHB@@B@HDHFNJFFJHFJHHDBB@FDFDVHXDRHBBNHJFNJJBHBH@N@N@D@D@XG@@NAJAFAL@N@HAB@D@FBP@PGBANCJAD@JBD@BBB@B@BBD@JFNHFDNFLFLFH@RBXCLCJANCHCNCHKJKJKLOJIFCHIHEJCRINCJCFADGESCG@C@E@E@C@@PIBCDE@IAKDELOBCLKJMFIDADAFAREJO@GHEJCDIFS@@@ADKJQBALQJMDCJI@KAKCGACIOIIAAECAACAIDIDKFOJMB@@@@I@EAA@CAIEEECGAEEM@MBQDCB@BAJGJODOGY@C@SBCHKFUBIAM@E@GBGBMBI@A@CLKD@NHNALEHGJK@S@ECWBUDK@GH[BE@@@@@ABM@I@G@CAE@C@@@@@AEGIKUAEAA@@@IAQEQGAAC@QAMAACCFKDC@I@M@KAE@QAA@C@"],"encodeOffsets":[[116593,40318]]}},{"type":"Feature","id":"140226","properties":{"name":"左云县","cp":[112.703008,40.013442],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@O@GAGCEIEUDQFGBIDEDQFUHEAKCAEAIEIGEMGYGQCGFCJCFIFMFOF@NAL@N@FDR@BBRCN@BEBMDKDIDIPGR@HBFFLDHFNBHDP@D@HBNAJAHAPCPCP@FAJJNJLNPJPDRBDBFBHDPFLDPBJBHBJHJDJBBBDBHFRAF@JGFED@BAHADAF@HABEBC@EBABABCFAD@B@FAD@DABEDAB@@@B@BCBAB@B@@@BB@@D@B@B@BD@@@DBDBDBB@D@@B@BA@ADC@A@ABA@ABCD@@A@EAAAA@AB@@A@CBA@@BA@G@ABC@CBABCB@B@B@DAB@BEB@BABBB@@DBB@DBFBD@@BB@A@@BA@ABAHAB@@AB@@@BA@A@ABA@E@@@ADAD@BBDBBBD@@@BABAB@@AB@BA@@@ABAB@B@BBDBBB@DBB@BB@@@BA@EB@@AB@F@BFFLHVBF@L@\\BJNANABEJMJOLIRBPLPLF@@L@B@B@DBB@@B@@AD@FBDAB@BAB@@@F@B@@D@HAFCBCBABAFEHCDAFAFEFAFCDCDAFEHCBADCFCBAB@FCDAHCHCBCJGDAFAFAHCFEHGBBJGFCFEJELAJ@J@LBJBFBBBLBHDHDXLPFFDXHFDF@JDNDHBXHJDHHBFDHFHBDDNNbHNDHBHDHNKTGPINOD[@SLK@AHAB@F@BAJAHAF@DABAB@FB@@@@DC@C@C@A@A@C@C@A@CBA@ABC@ABE@@@C@AAAA@@A@@B@@@DAJAD@D@DAN@D@B@D@@A@A@@@A@A@AAACEAAA@@ACAA@GCAA@@AAB@@A@CBADC@@BCBCBA@AFAB@F@@@B@B@D@B@B@B@DABCBA@@@AAEAC@ACC@AAA@ECGIOACACC@CA@AAA@C@E@C@ACE@AAAAACAKACAC@KCOAK@OE@CD@@AH@FAH@@AAACGAAA@G@AAGACAE@CAACBABCBC@C@C@CAC@C@CBA@ABCDABA@ABAHGHEB@BC@CAA@CDEAA@A@E@EIGKEAGHI^EXBPDLANEDAFCBCHCBE@C@CAMAICICCEKIKMGOEAAGASCIAAEAAAACBMAAACBEAA@EBABBDC@CFGESQEIDCJEHEDGDQLCJAJ@HDFGNCLKHEDA@A@A@CB@BCB@DADAB@B@B@DAB@DA@ABABCB@DEDEBA@@BCBA@ABA@@CEACA@AC@ACAAA@AA@@A@A@CAAA@E@GDCBA@CBEDA@ADA@A@@AAA@C@A@A@C@A@C@A@AA@@A@AAA@A@A@AA@AAA@A@GAG@CAAAAAAA@AAAEE@AA@CAAAA@C@GAG@E@KCSEGKBMCECCIEOEO@OAE@I@M@OGGECEAG@EFEBCIAMA@@QAcBK@E@OB[C"],"encodeOffsets":[[115459,40729]]}},{"type":"Feature","id":"140227","properties":{"name":"大同县","cp":[113.61244,40.040294],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EODGDI@S@MAS@KAG@EACAECEGAEAGAS@CAABCBC@GCCCCBEBGBEDA@@@ABCB@BABAB@F@BAB@F@BEAEAAAEC@AGAEFABCD@BA@A@AB@BA@ABADA@ABCBA@@BC@ABEB@BCBEBABA@ABA@@BCBABEDCDCBCBEDEBA@EBGDA@AB@@CBEHA@CHAB@@AFADAD@@ADADAB@BABCHADAB@DBBBD@BB@BBB@B@P@B@BBB@@BBBB@BFBB@BF@B@FHFFBD\\ZPFP@J@DAB@PHPJVFBBRBNDILMJUTGL@@CDCB@@ABABA@ADCDABA@ADA@ED@BADADADA@ADCBABAFA@@BABA@@DAD@B@BBB@BABAB@@@BDBBBBFBD@D@B@BCDABADABBD@BAB@BCBCDAB@BABADA@ABA@A@AB@BA@@F@BA@AD@BABBBBHAF@H@FBFBDDFDH@D@BDDBDBBBH@DBB@DDFBB@BBBBBDBDDJD@@DFB@BD@BBLBD@@@BBDB@@DBBAB@BADCDABCFEDELAD@DAB@D@DBF@B@BBBB@@B@@@B@BB@@B@B@D@BH@@DB@@BB@B@BB@@BBDBADCHCFAB@@@BAD@BBBBHDDBB@D@BBBBFB@@B@B@DAHAB@BABABA@ABC@ABABABGFCDABAB@D@B@BADABBBA@@BBD@BBB@@BBBB@B@B@DBDBBDDDBHBHFDBNFD@DBBBBBDB@BBD@B@@@B@@ADA@@BB@@BDB@@@BBB@@@BAB@@ABAD@BBBBB@@B@DAB@B@DBB@@@@BBB@@B@DFFJDDJJTLJHNLNJBB@@B@@BB@B@JDB@BD@@B@B@B@BBB@@BB@DA@@DBD@@BDBDBD@@BB@@D@DD@JFFDBB@@@@BBBB@BB@@@B@BABBBDBBBBDBDBBBBB@@B@B@B@DAB@B@@@B@D@BB@AB@AABA@A@ABADADE@CB@@EBA@@BA@@BCDCDAB@B@@AD@DAB@BABAB@D@F@@@HDHDF@F@BBD@B@DB@@B@B@@AD@BCF@@AB@@A@EBA@A@@D@H@FBB@DAFADADA@@D@B@DAHAD@BADCDC@@@@BA@@@AA@A@C@A@AAAAAAAAGEAA@@@A@@@A@@@@@AD@@@@A@@A@ACA@@AB@D@@@@AAG@CCCAA@A@A@ABC@ABEDO@AAE@A@A@A@ABCDCJGFCHGDABAB@DAD@DCDADAFAFAHAFAB@@A@@BA@C@@B@@CBA@@F@B@B@@A@@BC@ABADCDAHA@AF@BABC@@B@D@D@D@DBB@DBBAB@B@DABAB@B@BBDBB@B@D@B@@@FALAJADAB@FCDAB@BA@A@A@@@@DA@@@@@ABCB@B@FAD@B@DADABA@@BA@A@@@ABA@@BA@ABA@@DAD@@@BBFB@@BAD@H@D@F@H@@@D@LAFAB@D@BBDBBBB@LCB@HA@@FCLGFABAB@BEFGBCB@BCFADCBABCB@@@DB@@BA@C@ABCDM@ABA@A@C@@BA@ADE@A@A@@@A@@BA@@BCDA@ABA@@AA@A@A@@BA@@FABABABAB@@ABC@@BABAB@DC@AB@AA@@CICC@AAA@C@C@E@@AA@@CAG@E@E@M@C@@@AAA@@AAA@A@A@C@CB@@EBABAB@B@D@B@F@B@@@BABAB@D@DDBB@@FCF@@AB@DADEFABAHCBA@ADC@A@A@@AEC@GAA@CC@@AAAA@A@AAA@A@AA@EAAAA@AC@AAE@E@@@C@A@A@G@A@ABA@A@A@CBABCBG@ABA@A@@BC@E@I@A@A@AAA@A@@GG@AEIEIAE@EBEBC@A@AA@CCEGAAA@EE@@GGEEGMMDGDMDIBKDWDQAG@KEKEMEECMGIEC@AAA@A@AAC@IAC@IBMDABOHO@EAC@A@GBM@K@EBIBMB@@WHC@C@M@M@G@GAIAMIIEMGAAQGWCUGECECA@CAGGEIIGEEMIGEGCA@@@GAQCCAOAIAQIMMCCGI"],"encodeOffsets":[[116201,40744]]}}],"UTF8Encoding":true});}));