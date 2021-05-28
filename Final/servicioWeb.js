// Servicio que almacenara la informacion de las canciones
const http = require( 'http' );

const direccion = 'localhost';

const puerto = 5004;

const servicioM = function( peticion, respuesta ){

    respuesta.setHeader( "Content-Type", "application/json" );

    switch( peticion.url ){
        case "/2":
                respuesta.writeHead(200);
                respuesta.end( JSON.stringify( [  
                    {
                        "id" : "1",
                        "sentimient": "negative",
                        "nombre":"Switch",
                        "autor": "Masked Wolf",
                        "url": 'https://youtu.be/B9WfUZAv89A',
                        "text": 'Yeah yeah Sometimes yeah I need to switch... So I start to switch... I switch, when I get like this I lose control, cannot hold elements Then I start to switch, when I get like this I lose control, cannot hold elements, eh I dont wanna ride, I dont wanna roll I aint livin life, I am takin it slow I been on edge, like Im on the coast She gon dive in, like it is a moat Then I start to switch, when I get like this I lose control, cannot hold elements Then I start to switch, when I get like this I lose control, cannot hold elements Got no time to waste (time to waste) Today was yesterday (yesterday) All I hear is chitchat, little bit of this that And that money you make At times I feel I break (I break) But the melody kill my space (my space) I had to get ahead But could not lose my brain, yeah, yeah Boom switch, colors change You just worried bout your chains I just worry bout my game Flow be so cool, still flame Dont pop pills in the late night But I still got flow like a great white Dont chose to break like half time But sometimes I just switch sides Then I start to switch, when I get like this I lose control, cannot hold elements Then I start to switch, when I get like this I lose control, cannot hold elements, eh I dont wanna ride, I dont wanna roll I aint livin life, I am takin it slow I been on edge, like Im on the coast She gon dive in, like it is a moat Keep the work like it is nine to five Payin me like my oh my Cream of the crop, like we talkin science Take a risk, let me roll the dice Tell me the price to pay Line to break Head gon sway, yo we gon shake No holiday, time to waste No fade away, we do not fall away Ey, sometimes I feel I might drown Skeletons in my closet wanna come out This that shit that make me start to drift Then I start to slip Then I start to switch, when I get like this I lose control, cannot hold elements Then I start to switch, when I get like this I lose control, cannot hold elements, eh I dont wanna ride, I dont wanna roll I aint livin life, I am takin it slow I been on edge, like I am on the coast She gon dive in, like it is a moat Yeah, yeah (When I get like this) (Then I start to switch)',
                    },
                    {
                        "id" : "2",
                        "sentimient": "negative",
                        "nombre":"Kawaki Wo Ameku",
                        "autor": "Minami",
                        "url": 'https://youtu.be/0YF8vecQWYs',
                        "text": '未熟 無ジョウ されど 美しくあれ No destiny ふさわしく無い こんなんじゃきっと物足りない くらい語っとけばうまくいく 物 金 愛 言 もう自己顕示飽きた 既視感 何がそんな不満なんだ？ 散々ワガママ語っといて これ以上他に何がいる？ そんなところも割と嫌いじゃ無い もう「聞き飽きたんだよ そのセリフ」 中途半端だけは嫌 もういい ああしてこうして言ってたって 愛して どうして？ 言われたって 遊びだけなら簡単で 真剣交渉無茶苦茶で 思いもしない 軽(おも)い言葉 何度使い古すのか？ どうせ 期待してたんだ出来レースでも 引用だらけのフレーズも 踵持ち上がる言葉タブーにして 空気を読んだ雨降らないでよ まどろっこしい話は嫌 必要最低限でいい 2文字以内でどうぞ 紅の蝶は何のメールも送らない 脆い扇子広げる その方が魅力的でしょう 迷で 応えられないなら ほっといてくれ 迷えるくらいなら 去っといてくれ 肝心なとこは筒抜けで 安心だけはさせられるような 甘いあめが降れば 傘もさしたくなるだろう？ このまま 期待したままでよかった 目を瞑った 変えたかった 大人ぶった 無くした 巻き戻せなかった 今雨 止まないで コピー ペースト デリート その繰り返し 吸って 吐いた だから それでもいいからさ 此処いたいよ もういい ああしてこうして言ってたって 愛して どうして？ 言われたって 遊びだけなら簡単で 真剣交渉支離滅裂で 思いもしない重い真実(うそ)は タブーにしなくちゃな？ きっと 期待してたんだ出来レースでも 公式通りのフレーズも 踵上がる癖もう終わりにして 空気を読んだ空晴れないでよ 今日も 雨 傘を閉じて 濡れて帰ろうよ',
                    },
                    {
                        "id" : "3",
                        "sentimient": "mixed",
                        "nombre":"Koi No Uta",
                        "autor": "Yunomi",
                        "url": 'https://youtu.be/A6l8THwbcfY',
                        "text": 'ato dore kurai no kyori wo tsuki e aruitara ato dore kurai no samui yoru wo kasanetara ato dore kurai no sayonara wo nagashitara mabuta no oku no izumi ga karehateru, to ka sen nen go mo kitto tsuzukudarou sou omotteta kuudou wo mitashite afurete shimau hodo no kono kimochi wa nan da?  atarashii kaze wo haru wa hakonde kurerudarou aa, kaze ga fuku no ga kitto kaeru basho nan darou kawaranai deshou natsu no atsu sa mo, kingyo mo hanabi ga kietara hoshi wo yodoushi kazoeyou iroaseru kigi, itetsuku yubisaki, kasaneta hibi no tomoshibi furitsumoru yuki ni uzumorenai you na kienai ato wo nokoshi ni  kamikire ichimai te wo nobashita doa tatta hitokoto no ‘hai’ ya, chippoke na ishikoro sonna mono de kantan ni kawaru, mirai wa  tanjun da yo maiasa no ‘ohayou’ eiga mitai ni aoi natsu no umi wo mite tooi tokoro de i basho wo shiri ima to ima wo kasaneteku, firumu no you ni nan kai mo torinaoshida iroaseru yori, irodoru yori, kimi no iru keshiki ga koi na chokkan de mo tossa de mo ii sou omottan da, tada mayoi naku shinjite mo ii ka to kikareta tatta sore dake no toi da kangaeterun da, donna toki mo ano koe ga tsukimatoi nagara oshiteru, zutto senaka wo sou ka, kono kimochi ga koi da  tanjun da yo maiasa no ‘ohayou’ eiga mitai ni aoi natsu no umi wo mite tooi tokoro de i basho wo shiri ima to ima wo kasaneteku, firumu no you ni nan kai mo torinaoshida iroaseru yori, irodoru yori, kimi no iru keshiki ga koi na  sen nen mae no tooka ni nobashita ni pon no yubi ga sen nen go mo zutto mukou de kagayaiteru to ii na ‘shinjite mo ii’ sou kikoeta manmaru na tsuki, aoida terashiteta, itsu no yo mo sou ka, kono kimochi ga koi da',
                    },
                    {
                        "id" : "4",
                        "sentimient": "mixed",
                        "nombre":"Astronaut In The Ocean",
                        "autor": "Masked Wolf",
                        "url": 'https://youtu.be/MEg-oqI9qmw',
                        "text": 'What you know about rolling down in the deep? When your brain goes numb, you can call that mental freeze When these people talk too much, put that shit in slow motion, yeah I feel like an astronaut in the ocean, ay  What you know about rolling down in the deep? When your brain goes numb, you can call that mental freeze When these people talk too much, put that shit in slow motion, yeah I feel like an astronaut in the ocean  She say that I m cool, I m like yeah, that s true I believe in G-O-D, don t believe in T-H-O-T She keep playing me dumb I ma play her for fun Y all don t really know my mental Lemme give you the picture like stencil Fallin  out, in a drought, no flow, rain wasn t pouring down See that pain was all around, see my mode was kinda lounge Didn t know which which-way to turn Flow was cool but I still felt burnt Energy up, you can feel my surge I ma kill everything like this purge  Let s just get this straight for a second, I ma work Even if I don t get paid for progression, I ma get it Everything that I do is electric I ma keep it inner motion, keep it movin like kinetic, ay Put this shit in a frame, but I know I don t blame Every day that I say, man I seen you deflate Let me elevate, this ain t a prank Have you woken on a plank, la-la-la-la-la Oh, pass together, God let me party I ve been going right, right around, caught a relay Pass the baton, back to the mall, swimming in the pool Can t drink em all, uh Wanna piece of this, a piece of mama, a piece of Xan Can you please read between the lines? My rhyme s inclined to break your spine They say that I m so fine You could never match my crime Please do not now waste my time  What you know about rolling down in the deep? When your brain goes numb, you can call that mental freeze When these people talk too much, put that shit in slow motion, yeah I feel like an astronaut in the ocean, ay  What you know about rolling down in the deep? When your brain goes numb, you can call that mental freeze When these people talk too much, put that shit in slow motion, yeah I feel like an astronaut in the ocean',
                    },
                    {
                        "id" : "5",
                        "sentimient": "negative",
                        "nombre":"Darkness",
                        "autor": "Eminem",
                        "url": 'https://youtu.be/RHQC4fAhcbU',
                        "text": "I don't wanna be alone I don't wanna be I don't wanna be alone In the darkness I don't wanna be alone In the darkness I don't wanna be alone In the darkness anymore Here I am, alone again Can't get out of this hole I'm in It's like the walls are closin' in You can't help me, no one can I can feel these curtains closin' I go to open 'em But something pulls 'em closed again (Hello darkness, my old friend) Feels like I'm loathing in Las Vegas Haven't got the vaguest, why I'm so lost? But I'd make you this small wager If I bet you, I'll be in tomorrow's paper Who would the odds favor? (Hello darkness, my old friend) I'm so much like my father You would think that I knew him I keep pacin' this room, Valium Then chase it with booze One little taste it'll do Maybe I'll take and snooze Then tear up the stage in a few (Hello darkness, my old friend) Fuck the Colt 45, I'ma need somethin' stronger If I pop any caps, it better be off of vodka Round after round after round I'm gettin' loaded (Haha) That's a lot of shots, huh? Double entendre (Hello darkness, my old friend) I don't wanna be alone in the darkness (Yeah) I don't wanna be alone in the darkness I don't wanna be alone in the darkness anymore (Hello darkness my old friend) Now I'm starin' at the room Service menu off a Benzo I can hear the music Continue to crescendo I can see the whole venue from my window That's when you know you're schizo (Hello darkness my old friend) 'Cause I keep peakin' out the curtain from the hotel The music is so loud But it's almost as though I don't hear no sound I should get ready for the show now Wait, is this the whole crowd? I thought this was sold out (Hello darkness my old friend) But it's only the opening act It's early don't overreact Then something told me, relax And just hope for the show to be packed Don't wanna hit the stage Before they fill each row to the max 'Cause that'd be totally wack You can't murder a show nobody's at (Hello darkness my old friend) But what if nobody shows? Panic mode, 'bout to snap and go Mother- wacko at any second 'Bout to cancel the show Just as fans below rush the entrance Plan is a go to wreck- Cameras in all directions (Hello darkness my old friend) The press is about to go ape- Bananas on all the networks Commando with extra clips I got ammo for all the hecklers I'm armed to the teeth Another - fall off the bed Hit the ground and crawl to the dresser Alcohol on my breath as I reach for the scope I'm blackin' out I'm all out of meds With them Benzodiazepines gone Now it's just magazines sprawled out on the floor Off the media I'm goin' all out, this is war (Hello darkness my old friend) And I don't wanna be alone in the darkness (Yeah) I don't wanna be alone in the darkness I don't wanna be alone in the darkness anymore People start to show up Time to start the show up It's 10:05 p.m. and The curtain starts to go up And I'm already sweatin' But I'm locked and loaded For rapid fire spittin' For all the concert goers Scopes for sniper vision Surprise from out of nowhere As I slide the clip in From inside the hotel Leanin' out the window Going Keyser Söze Finger on the trigger But I'm a licensed owner With no prior convictions So lost, the sky's the limit So my supplies infinite Strapped like I'm a solider Got 'em hopping over Walls and climbing fences Some of them John Travolta Staying alive by inches (Hello darkness my old friend) Cops are knockin', oh- Thought I blocked the entrance Guess show time is over No suicide note Just a note for target distance But if you'd like to know The reason why I did this You'll never find a motive Truth is I have no idea I am just as stumped No signs of mental illness Just tryin' to show ya The reason why we're so fucked 'Cause by the time it's over Won't make the slightest difference (Hello darkness my old friend) I don't wanna be alone in the darkness I don't wanna be alone in the darkness I don't wanna be alone in the darkness anymore"
                    },
                    {
                        "id" : "6",
                        "sentimient": "negative",
                        "nombre":"Speed Racer",
                        "autor": "Masked Wolf",
                        "url": 'https://youtu.be/CN2NPxyzKlc',
                        "text": "Come on Mr. Speed Racer Masked Wolf I'm walking through a ghost town Y'all ain't playin' my sounds Don't tell me to calm down Don't tell me to calm down Only time I go backwards is when I wanna moonwalk Don't test me, my mood's wrong Don't test me, my mood's wrong We are, who we say that we aren't Yeah, we're lost in the stars And it's all from the start Never runnin' on pace Never on the right page But we still read that book And we still run that race, ay Mr. Speedracer', ridin' out No shortcuts, no time for that Mr. Speed Racer, ridin' out Til' the wheels fall off, I'm driving that Mr. Speed Racer, ridin' out Wheels start burning, strike the match Mr. Speed Racer, ridin' out Red light, green light, red light, goodnight (woo, woo, woo) Ay, red light, green light, red light, goodnight (woo, woo, woo) Red light, green light, red light, goodnight (woo, woo, woo) Red light, green light, red light, goodnight (woo, woo, woo) Red light, green light, red light, goodnight No time to chill, don't sweat it My drive in overdrive, this is overtime Let me finish mine, you don't see the signs But every line I see is the finish line I've been working real damn hard But work only get you so damn far See my mindset is on my progress Every foot I take is just another step They say practice makes perfect But aren't you perfect if you always practice I'm just tryna give you ideas How different thinking makes you accomplish Like walking on the moon You believe it or you don't, I will never choke One hand on the wheel, one hand on the shift Like addicted smokers, I will never quit Push me to the edge, and I might fly on out Push me down that path, and I ain't crying loud Gotta lotta things playin' on my brain Gotta lotta people sayin' this okay Guardian angel, helpin' me escape Lion is born, and it was never made Don't ever plan on following steps I plan on being that one chase I'm walking through a ghost town Y'all ain't playin' my sounds Don't tell me to calm down Don't tell me to calm down Only time I go backwards is when I wanna moonwalk Don't test me, my mood's wrong Don't test me, my mood's wrong Mr. Speedracer', ridin' out No shortcuts, no time for that Mr. Speed Racer, ridin' out Til' the wheels fall off, I'm driving that Mr. Speed Racer, ridin' out Wheels start burning, strike the match Mr. Speed Racer, ridin' out Red light, green light, red light, goodnight"
                    },
                    {
                        "id" : "7",
                        "sentimient": "negative",
                        "nombre":"92i Veyron",
                        "autor": "Booba",
                        "url": 'https://youtu.be/hwtLqJyhS3Q',
                        "text": "Personne, personne Personne, personne Nouveau riche, ma Lamborghini a pris quelques dos-d'âne J'fais ni la queue au Ritz ni au McDonalds Si c'est eux qui ont raison, je ne suis pas raisonnable La rafale dans ton salon sera sûrement désagréable Nouveau riche, ma Lamborghini a pris quelques dos-d'âne J'fais ni la queue au Ritz ni au McDonalds Si c'est eux qui ont raison, je ne suis pas raisonnable La rafale dans ton salon sera sûrement désagréable On trinque à nos balafres, à nos crochets tous les soirs Noir c'est noir ont-ils dit, y'a donc vraiment plus d'espoir Les vainqueurs l'écrivent, les vaincus racontent l'histoire Les vainqueurs l'écrivent, les vaincus racontent l'histoire Personne dans le monde ne marche du même pas Leurs règles ont toutes une tombe C'est ça qu'ils ne comprennent pas Des allers-retour en prison certains n'en reviennent pas J'ai kalash et des mouftons, tous sous le même toit Toujours d'humeur à les lever Que l'avenir suce mon troisième doigt Vroom, moi je ne t'aime pas ni celui qui est avec toi Y'a que quand tu baises ta daronne que j'suis de tout cœur avec toi T'as même pas de quoi me faire fumer Qu'est-ce que j'vais faire avec toi? Je parle de rue car j'y ai baigné Même si j'y suis beaucoup moins Je t'écris du block avec G.A.T.O. B.A.T.O, boug an mwen Y'a du son, d'la chatte, du shit, y'a le 92i dans le coin Grosse bite dans la chatte du SMIC Coup d'pied retourné dans le groin Bombe nucléaire sur le game, il ne restera que moi et les rats Quand je monterai dans la Veyron, jamais tu ne me reverras Inspiré par la musique de ces descendants d'esclaves Ils achètent négros sur place publique, pour eux rien n'est grave J'ai couronne sur la tête pourtant c'est le voisin qui a eu la fève Il n'y aura jamais de trêve m'ont dit mes khos du 93 Braisé poulet, locos, bananes, le rap c'est haram Génocide sur ces négros, j'vais les Boko Haram Ne fais pas trop de bien ou tu seras cloué sur une croix La rafale dans ta grand-mère arrivera plus tôt que tu ne crois La race humaine me dégoûte, j'allume gros pilon au chalumeau Nique ta fondation de merde, j'préfère sauver les animaux On trinque à nos balafres, à nos crochets tous les soirs Noir c'est noir ont-ils dit, y'a donc vraiment plus d'espoir Les vainqueurs l'écrivent, les vaincus racontent l'histoire Les vainqueurs l'écrivent, les vaincus racontent l'histoire Personne dans le monde ne marche du même pas Leurs règles ont toutes une tombe, c'est ça qu'ils ne comprennent pas Des allers-retour en prison certains n'en reviennent pas J'ai kalash et des mouftons, tous sous le même toit Toujours d'humeur à les lever, que l'avenir suce mon troisième doigt Vroom, moi je ne t'aime pas ni celui qui est avec toi Y'a que quand tu baises ta daronne que j'suis de tout cœur avec toi T'as même pas de quoi me faire fumer Qu'est-ce que j'vais faire avec toi?"
                    },
                    {
                        "id" : "8",
                        "sentimient": "mixed",
                        "nombre":"Désaccordé",
                        "autor": "Vald",
                        "url": 'https://youtu.be/kutk2XHEZNU',
                        "text": "Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Je ne suis pas un écrivain, je suis plus qu'un esprit simple Je multiplie les p'tits pains Je ne l'appelle pas, j'sais qu'il vient On m'appelle V.A.L.D, ce rap de merde, j'ai allaité J'crois que j'vais jamais arrêter J'coupe la plaquette à l'épée Plein de filtres, plein d'effets T'as pas de rime, pas de texte Pas de string, même pas de fesses Pas de peace, donc pas de guerre Si tu le fais pas, moi, je le fais Si tu le sais pas, moi, je le sais Comme si j'étais sorti d'H.E.C, sur le détecteur, la chaussette J'ai les combos, la recette Promis, j'touche pas ta sœurette Je t'aime encore en levrette Je t'aime encore en secret Putain, j'ai l'cœur sur la main J'renifle les fleurs du malin J'sens encore l'odeur du machin J'esquive lueur du matin Je sais très bien ce qui m'attend Elle me dit 'pense à moi si t'as le temps' J'la vois qu'une seule fois par an comme le prime sur le Sidaction J'ai la vue sur le timent-bâ Je ne suis plus sentimental Tu m'as vu sortir en bas Les poumons quasiment noirs En route pour niquer des mères Comme lundi matin, dimanche soir M'écoute pas, si tu préfères ton rap de caissier qui vend pas Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais R.A.F d'égarer mon buzz, d'éclater mon buzz De faire des sons deus', j'ai gardé son gueuz, ouais, ouais, ouais R.A.F d'égarer mon buzz, d'éclater mon buzz De faire des sons deus', j'ai gardé son gueuz, ouais, ouais, ouais Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais NQNT comme péritel Sullyvan rappe trop spirituel Je ne ter-fri plus everyday Ça me rend l'esprit trop étriqué Niquez vos mères, j'vais me délivrer Tout cette oseille, j'l'ai mérité J'ai disque d'or, j'ai pedigree T'as que le mort, t'es périmé J'peux m'arrêter mais j'continue Pour le turn-up, je contribue Abandonne-moi, j'reconfigure J'te laisse la chatte en confiture Toujours un drame alors qu'on simule On vit pas sur la même longitude Mashallah, frère, pour tes longues études Si le besoin est gros, y'a mon pécule J'arrive en balle, trafiquant d'armes Poliakov, Redbull, Miranda Fume pas la gomme continentale Rappe plus, fais moins de kizomba Sale pute, on t'a pris en flag Rap saturé d'immenses garces J'mets la lumière sur bilan crade Prochain album, j'veux 600 K J'ai la vue sur le timent-bâ Je ne suis plus sentimental Tu m'as vu sortir en bas Les poumons quasiment noirs En route pour niquer des mères Comme lundi matin, dimanche soir M'écoute pas, si tu préfères ton rap de caissier qui vend pas Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais R.A.F d'égarer mon buzz, d'éclater mon buzz De faire des sons deus', j'ai gardé son gueuz, ouais, ouais, ouais R.A.F d'égarer mon buzz, d'éclater mon buzz De faire des sons deus', j'ai gardé son gueuz, ouais, ouais, ouais Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais Ouais, ouais, ouais, ouais Ah ouais, ouais, ouais Ah ouais, ouais, ouais"
                    },
                    {
                        "id" : "9",
                        "sentimient": "positive",
                        "nombre":"Koi ni Koishite",
                        "autor": "Mai Kuraki",
                        "url": 'https://youtu.be/rQ73KgimPxY',
                        "text": "キミとの恋に恋をしてるだけで 伝えたくてもまだ 秘密にしてるほうが幸せだから 今は私だけのsecret love キミに全然興味ない ウソ you are my perfect guy トキメキは隠せない ホントは気になって仕方ない 恋に不器用 損なstyle キミの前だと 別人みたい 誰にも言えない 秘密のまま それでもI'm alright 恋の行方なんて 誰にも わからないでしょ oh ohh きっとこの恋ちゃんといつか叶うはず信じて まだit isn't the last chance for me いろんなlove storyを 描いてる 胸の中 でも理想にはほど遠い 私って わがまま それくらいのことわかってる だけどなにかいけないの? キミとの恋に恋をしてるだけで 伝えたくてもまだ 秘密にしてるほうが幸せだから 今は私だけのsecret love キミのこと想うと ドキドキが止まらないheart beat 楽しくもなるけど 不安にもなる このまま臆病な 私じゃ駄目だね ちょっとだけでも勇気をくだざい神様 だからね もうバイバイ 今までの私に I'm here to tell my love... じっと 待ってるだけじゃ何も始まらないこの先 Yeah it is the best chance for me いろんなlove storyを 描いてる 胸の中 理想まであとどれくらい? 私って わがまま それくらいのこと許して 独り占めにしていたい キミとの恋に恋をしてるだけで 伝えたくてもまだ 秘密にしてるほうが幸せだから 今は私だけのsecret love"
                    },
                    {
                        "id" : "10",
                        "sentimient": "mixed",
                        "nombre":"Anxiety",
                        "autor": "Besomorph & The Tech Thieves lyrics",
                        "url": 'https://youtu.be/1ig9Gk8hBBs',
                        "text": "Are you afraid of me Do I haunt your dreams Do you wish I wasn't around (Wasn't around) You showed me a new low Picture perfect psycho I don't wanna be the one to run, run, run, so Tell me, am I going crazy I can't breathe, I'm falling I'm starting to scare me, oh So find me deep beneath the blue sea I can't breathe, I'm drowning Now I'm saying thanks for the anxiety Color is fading, you're hesitating If you need me I'm underground Now my hands are tied in the shadows And I'm paralyzed won't you let go I don't wanna be the one to run, run, run, so Tell me, am I going crazy I can't breathe, I'm falling I'm starting to scare me, oh So find me deep beneath the blue sea I can't breathe, I'm drowning Now I'm saying thanks for the anxiety I don't wanna be the one to run, run, run, so Tell me, am I going crazy I can't breathe, I'm falling I'm starting to scare me, oh So find me deep beneath the blue sea I can't breathe, I'm drowning Now I'm saying thanks for the anxiety Tell me, am I going crazy I can't breathe, I'm falling I'm starting to scare me, oh (Anxiety) So find me deep beneath the blue sea I can't breathe, I'm drowning Now I'm saying thanks for the anxiety (Anxiety)"
                    },
                    {
                        "id" : "11",
                        "sentimient": "positive",
                        "nombre":"Daddy ! Daddy ! Do !",
                        "autor": "Masayuki Suzuki",
                        "url": 'https://youtu.be/2Od7QCsyqkE',
                        "text": "DADDY! DADDY! DO! 欲しいのさ あなたのすべてが 愛に抱かれギラギラ 燃えてしまいたい 可愛げなキスで1・2・3 目線そらしてズルイよね 火照り出すボクの気持ち もてあそぶみたいで 追いかけちゃ ダメなのは わかってる でも無理さ 一度踏み出せば 戻れなくて 仮面は脱ぎ捨てて いけない言葉で 遊びが本気になる DADDY! DADDY! DO! 欲しいのさ あなたのすべてが 騙されたら それでもいい もっと震わせて 魅せてくれ 僕だけに 笑顔の裏まで 愛に抱かれギラギラ 燃えてしまいたい 躊躇などしないNO NO NO 二度と逢えないひとだから 後悔に暮れるのなら 恋の火に焼かれたい わざとでしょう 流し目が 愛しさを 刺激する そっと振り返る美しさに 心はつかまれて 呼吸が止まって 遊びが本気になる DADDY! DADDY! DO! ぶつけたい 想いのすべてを 綺麗なものだけじゃなくて 危険な願いも 止めないで その声が 僕を連れていく 愛に抱かれギラギラ 燃えてしまいたい 「あなただけ」と言うくちびるが 優しく微笑むたび 飲み込まれて いざなわれて 未知の世界触れて DADDY! DADDY! DO! 最後まで あなたにゆだねて 壊れるなら それでもいい もっと狂わせて 魅せてくれ 僕だけに 心の奥まで 愛に抱かれギラギラ 燃えたい いのち果てる夜明けまで"
                    },
                    {
                        "id" : "12",
                        "sentimient": "positive",
                        "nombre":"VORACITY",
                        "autor": "Myth & Roid",
                        "url": 'https://youtu.be/bI2-ioFv3UA',
                        "text": "I am very, very crazy, very 永遠に止まらない 世界の全て この口腔の中 (1, 2, 3, 4) さあいざ 闇の中で晩餐会を 誰も彼も食糧へと Can't stop, can't stop, eating Can't stop, can't stop, not enough Anything can be eaten, even if you say no, hahaha いのち尽くしフルコースを 味覚に暴力快楽を Don't stop, don't stop, eating Don't stop, don't stop, one more bite 嗚呼 足りない 飽きない 原罪の衝動よ I am very, very crazy, very 永遠に止まらない 欲に喰われた亡者の業 I wanna go Very, very tasty, very 盛大に宴を 世界の全て この口腔の中 I just want to eat, how tasty it is (1, 2, 3, 4) 何もかにもをこの俎上へと 理性さえも捕食対象 Can't stop, can't stop, eating Can't stop, can't stop, lost myself 許されない 止まない 本能の罪状 You're berry, berry, like a berry 熟れた紅い粒の様に 噛み割れ垂れる生命の sauce I'm also Berry, berry, we're berries 群小な者達よ 跡形もなく潰され消えゆけ I just want to eat, how tasty it is 罪と呼ぶなら良いでしょう 恥と呼ぶのも良いでしょう 欲望は本能 醜悪を肯定せよ I am very, very hungry, very 永遠に止まらない 欲に喰われた亡者の業 I wanna go Very, very tasty, very 盛大に宴を 世界の全て この口腔の中 I am very, very hungry, very Very, very tasty, very I am very, very hungry, very Very, very tasty, very I am very, very hungry, very Very, very tasty, very I am very, very hungry, very Very, very tasty, very I am very, very hungry, very Very, very tasty, very"
                    }
                ] ) )
                break
    }


}

const servidor = http.createServer( servicioM );

servidor.listen( puerto, direccion, () => {

    console.log( "The serve is running" );

    console.log( "In http://" + direccion + ":" + puerto );

});


