var userAgent = window.navigator.userAgent.toLowerCase();

function isMobileDevice() {
    return /mobile|iphone|ipod|ipad|android|blackberry|opera mini|iemobile|windows phone/i.test(userAgent);
}
if(isMobileDevice()){
    alert("There is no version for the phone yet, so you won't be able to pull the words.");
}

// let tab = [
//     'مرحبا-welcome-bienvenue',
//     'شكرا-thank you-merci',
//     'نعم-yes-oui',
//     'لا-no-non',
//     'صباح الخير-good morning-bonjour',
//     'مساء الخير-good evening-bonsoir',
//     'مرحى-hooray-hip-hip',
//     'أنا آسف-I\'m sorry-je suis désolé',
//     'لا مشكلة-no problem-pas de problème',
//     'مع السلامة-goodbye-au revoir',
//     'الرجاء-please-s\'il vous plaît',
//     'شكرا جزيلا-thank you very much-merci beaucoup',
//     'مبروك-congratulations-félicitations',
//     'أراك لاحقا-see you later-à bientôt',
//     'أنا أحبك-I love you-je t\'aime',
//     'سعيد-happy-joyeux',
//     'حزين-sad-triste',
//     'مجنون-crazy-fou',
//     'ذكي-intelligent-intelligent',
//     'جميل-beautiful-beau',
//     'رائع-wonderful-merveilleux',
//     'خطير-serious-sérieux',
//     'مضحك-funny-drôle',
//     'مذهل-amazing-incroyable',
//     'مستحيل-impossible-impossible',
//     'مخيف-scary-effrayant',
//     'حيوان-animal-animal',
//     'عصير-juice-jus',
//     'ماء-water-eau',
//     'حليب-milk-lait',
//     'خبز-bread-pain',
//     'جبن-cheese-fromage',
//     'لحم-meat-viande',
//     'سمك-fish-poisson',
//     'طماطم-tomatoes-tomates',
//     'جزر-carrots-carottes',
//     'بطاطس-potatoes-pommes de terre',
//     'فراولة-strawberry-fraise',
//     'تفاح-apple-pomme',
//     'برتقال-orange-orange',
//     'بنانا-banana-banane',
//     'كيوي-kiwi-kiwi',
//     'موز-plantain-banane plantain',
//     'توت-berries-baies',
//     'مانجو-mango-mangue',
//     'أفوكادو-avocado-avocat',
//     'تفاح أخضر-green apple-pomme verte',
//     'فراولة مجمدة-frozen strawberry-fraise congelée',
//     'بيض-eggs-œufs',
//     'مطر-rain-pluie',
//     'شمس-sun-soleil',
//     'سحاب-cloud-nuage',
//     'رياح-wind-vent',
//     'ثلج-snow-neige',
//     'جليد-ice-glace',
//     'حرارة-heat-chaleur',
//     'برودة-cold-froid',
//     'ضباب-fog-brouillard',
//     'عاصفة-storm-tempête',
//     'برق-lightning-foudre',
//     'رعد-thunder-tonnerre',
//     'شتاء-winter-hiver',
//     'صيف-summer-été',
//     'ربيع-spring-printemps',
//     'خريف-autumn-automne',
//     'بحر-sea-mer',
//     'نهر-river-rivière',
//     'بحيرة-lake-lac',
//     'جبل-mountain-montagne',
//     'تل-hill-colline',
//     'واد-valley-vallée',
//     'صحراء-desert-désert',
//     'غابة-forest-forêt',
//     'شلال-waterfall-chute d\'eau',
//     'جزيرة-island-île',
//     'قارة-continent-continent',
//     'مدينة-city-ville',
//     'قرية-village-village',
//     'بلدة-town-ville',
//     'عاصمة-capital-capitale',
//     'حي-neighborhood-quartier',
//     'شارع-street-rue',
//     'طريق-highway-autoroute',
//     'جسر-bridge-pont',
//     'منزل-house-maison',
//     'شقة-apartment-appartement',
//     'مكتب-office-bureau',
//     'مستشفى-hospital-hôpital',
//     'مدرسة-school-école',
//     'جامعة-university-université',
//     'مسجد-mosque-mosquée',
//     'كنيسة-church-église',
//     'معبد-temple-temple',
//     'ملعب-stadium-stade',
//     'متحف-museum-musée',
//     'مطار-airport-aéroport',
//     'محطة مترو-subway station-station de métro',
//     'محطة قطار-train station-gare',
//     'محطة حافلات-bus station-gare routière',
//     'سوق-market-marché',
//     'مركز تسوق-mall-centre commercial',
//     'مطعم-restaurant-restaurant',
//     'مقهى-café-café',
//     'حانة-bar-bar',
//     'سينما-cinema-cinéma',
//     "العمر-Age-Âge",
//     "جواب-Answer-Répondre",
//     "أشخاص-People-Peuple",
//     "عدو-Enemy-Ennemi",
//     "باب-Door-Porte",
//     "سؤال-Question-Question",
//     "سفينة-Ship-Navire",
//     "سماء-Sky-Ciel",
//     "أفعى-Snake-Serpent",
//     "عرض-Display-Afficher",
//     "زوج-Spouse-Conjoint",
//     "قضية-Case-Cas",
//     "خطأ-Error-Erreur",
//     "ملك-King-Roi",
//     "حقيقة-Truth-Vérité",
//     "عصا-Stick-Bâton",
//     "حجر-Stone-Pierre",
//     "رأي-Opinion-Opinion",
//     "حياة-Life-Vie",
//     "حب-Love-Amour",
//     "دم-Blood-Sang",
//     "أفكار-Ideas-Idées",
//     "أرض-Earth-Terre",
//     "شمس-Sun-Soleil",
//     "قمر-Moon-Lune",
//     "بحر-Sea-Mer",
//     "رياح-Wind-Vent",
//     "ثلج-Snow-Neige",
//     "ألوان-Colors-Couleurs",
//     "خطط-Plans-Plans",
//     "موسيقى-Music-Musique",
//     "حيوان-Animal-Animal",
//     "سمك-Fish-Poisson",
//     "طائر-Bird-Oiseau",
//     "أحمر-Red-Rouge",
//     "أصفر-Yellow-Jaune",
//     "أخضر-Green-Vert",
//     "أزرق-Blue-Bleu",
//     "أرجواني-Purple-Violet",
//     "أسود-Black-Noir",
//     "أبيض-White-Blanc",
//     "رمادي-Gray-Gris",
//     "قلم-Pen-Stylo",
//     "ورق-Paper-Papier",
//     "كتاب-Book-Livre",
//     "نظارات-Glasses-Lunettes",
//     "كيس-Bag-Sac",
//     "حذاء-Shoe-Chaussure",
//     "قميص-Shirt-Chemise",
//     "ساعة-Watch-Montre",
//     "قلادة-Necklace-Collier",
//     "حقيبة-Purse-Sac à main",
//     "قلم رصاص-Pencil-Crayon",
//     "حاسوب-Computer-Ordinateur",
//     "هاتف-Phone-Téléphone",
//     "تلفزيون-TV-Télévision",
//     "صحيفة-Newspaper-Journal",
//     "فيلم-Movie-Film",
//     "فيلم كرتون-Cartoon-Animation",
// 
let tab = [
    "مرحبا-welcome-bienvenue",
    "أكل-eat-manger",
    "شرب-drink-boire",
    "ينام-sleep-dormir",
    "يجري-run-courir",
    "يلعب-play-jouer",
    "يقرأ-read-lire",
    "يكتب-write-écrire",
    "يتحدث-speak-parler",
    "يسمع-listen-écouter",
    "يشاهد-watch-regarder",
    "يغني-sing-chanter",
    "يبكي-cry-pleurer",
    "يضحك-laugh-rire",
    "يسافر-travel-voyager",
    "يطبخ-cook-cuisiner",
    "يقود-drive-conduire",
    "يسبح-swim-nager",
    "يتسوق-shop-acheter",
    "يعمل-work-travailler",
    "يفهم-understand-comprendre",
    "يساعد-help-aider",
    "يتذكر-remember-se souvenir",
    "ينسى-forget-oublier",
    "يشرب-drink-boire",
    "يأكل-eat-manger",
    "يستمع-listen-écouter",
    "يأتي-come-venir",
    "يذهب-go-aller",
    "يعود-come back-revenir",
    "يصطحب-take-emmener",
    "يترك-leave-quitter",
    "يمشي-walk-marcher",
    "يقف-stand-tenir debout",
    "يجلس-sit-s'asseoir",
    "يستيقظ-wake up-se réveiller",
    "يرقص-dance-danser",
    "يبني-build-construire",
    "يكسر-break-casser",
    "يفتح-open-ouvrir",
    "يغلق-close-fermer",
    "يشتري-buy-acheter",
    "يبيع-sell-vendre",
    "يعلم-teach-enseigner",
    "يتعلم-learn-apprendre",
    "يشعر-feel-se sentir",
    "يعجب-please-plaire",
    "يحب-love-aimer",
    "يكره-hate-détester",
    "يخاف-fear-craindre",
    "يأمل-hope-espérer",
    "يسامح-forgive-pardonner",
    "ينظف-clean-nettoyer",
    "يتسوق-shop-faire des courses",
    "يعزف-play-jouer (un instrument)",
    "يدرس-study-étudier",
    "يزور-visit-visiter",
    "يحضّر-prepare-préparer",
    "يعتقد-believe-croire",
    "يعتقد-think-penser",
    "يحتاج-need-avoir besoin de",
    "ينجح-succeed-réussir",
    "يفشل-fail-échouer",
    "يسمح-allow-permettre",
    "يمنع-forbid-interdire",
    "يبدأ-start-commencer",
    "ينتهي-end-terminer",
    "يسرع-hurry-se dépêcher",
    "يتأخر-delay-se retarder",
    "يسير-walk-marcher",
    "يغوص-dive-plonger",
    "يقرفص-crawl-ramper",
    "يطير-fly-voler",
    "يؤمن-believe-croire",
    "يقدّم-present-présenter",
    "يهدم-destroy-détruire",
    "يغفر-forgive-pardonner",
    "يسقط-fall-tomber",
    "يصعد-climb-grimper",
    "ينزل-descend-descendre",
    "يهرب-escape-s'échapper",
    "يصل-arrive-arriver",
    "يغادر-leave-quitter",
    "يسرق-steal-voler",
    "يفكر-think-penser",
    "يجيء-come-come",
    "يسكن-live-vivre",
    "يموت-die-mourir",
    "يسكن-reside-résider",
    "ينجح-pass (exam)-réussir",
    "يجيد-be good at-être bon en",
    "يعلّم-teach-enseigner",
    "يتكلّم-speak-parler",
    "يحكي-tell-raconter",
    "يسمع-hear-entendre",
    "يشم-sniff-renifler",
    "يعيش-live-vivre",
    "يصطاد-hunt-chasser",
    "يعفو-pardon-gracier",
    "يسخر-mock-se moquer",
    "يبتسم-smile-sourire",
    "يغضب-get angry-se mettre en colère",
    "يباغت-surprise-surprendre",
    "يضيع-lose-perdre",
    "يجد-find-trouver",
    "يدمّر-destroy-détruire",
    "يعزّز-reinforce-renforcer",
    "يحسّن-improve-améliorer",
    "يفسّر-explain-expliquer",
    "ينفذ-implement-mettre en œuvre",
    "يحلّ-solve-résoudre",
    "يخترع-invent-inventer",
    "يشارك-participate-participer",
    "يستخدم-use-utiliser",
    "يتقن-master-maîtriser",
    "يمارس-practice-pratiquer",
    "يسابق-race-courir",
    "يتسلّق-climb-grimper",
    "يحبس-capture-capturer",
    "يحلق-fly-voler",
    "يحفر-dig-creuser",
    "يقطع-cut-couper",
    "يقفز-jump-sauter",
    "يزرع-plant-planter",
    "يروي-tell-révéler",
    "يغطّي-cover-couvrir",
    "يهدّم-demolish-démolir",
    "يصمّم-design-concevoir",
    "يكوّن-form-former",
    "يتألّف-constitute-constituer",
    "يتكوّن-consist-consister",
    "يصنع-make-fabriquer",
    "يخدع-deceive-tromper",
    "يشرح-explain-expliquer",
    "يتواصل-communicate-communiquer",
    "يناقش-discuss-discuter",
    "يقنع-convince-convaincre",
    "يتفاوض-negotiate-négocier",
    "يتصالح-reconcile-se réconcilier",
    "يحارب-fight-combattre",
    "يهاجم-attack-attaquer",
    "يدافع-defend-défendre",
    "يستسلم-surrender-se rendre",
    "ينجو-survive-survivre",
    "يهرع-hurry-se dépêcher",
    "يحلّل-analyze-analyser",
    "يستقبل-receive-recevoir",
    "يشترك-participate-participer",
    "يتعافى-recover-se rétablir",
    "يفرح-celebrate-célébrer",
    "يتذكّر-remember-se souvenir",
    "يحصل-get-obtenir",
    "يفوز-win-gagner",
    "يخسر-lose-perdre",
    "يعد-promise-promettre",
    "يتعلّم-learn-apprendre",
    "يدرّب-train-former",
    "ينمّي-develop-développer",
    "ينمو-grow-grandir",
    "يقود-pilot-piloter",
    "يهدم-demolish-démolir",
    "يشتغل-work-travailler (informal)",
    "يشتغل-operate-fonctionner",
    "يسير-drive-conduire (informal)",
    "يسيّر-manage-diriger",
    "يولد-birth-naître",
    "ينضج-mature-mûrir",
    "يزداد-increase-augmenter",
    "يقلّص-decrease-diminuer",
    "يتغير-change-changer",
    "يتطور-develop-développer",
    "يكتمل-complete-compléter",
    "يتحسن-improve-améliorer",
    "يتدهور-deteriorate-détériorer",
    "يشيخ-age-vieillir",
    "يظل-remain-rester",
    "يصير-become-devenir",
    "ينفصل-separate-se séparer",
    "يجتمع-gather-se rassembler",
    "ينتقل-move-déménager",
    "يهاجر-migrate-migrer",
    "يتزوج-marry-se marier",
    "يطلّ-divorce-divorcer",
    "ينجب-have children-avoir des enfants",
    "يتقاعد-retire-prendre sa retraite",
    "يتمرّن-train-s'entraîner",
    "يتدرّب-train-s'entraîner (informal)",
    "يحصل على-get-obtenir",
    "يتفوق-excel-exceller",
    "يتميّز-distinguish-se distinguer",
    "يتراجع-recede-se retirer",
    "يتقدّم-advance-avancer",
    "يتأخّر-delay-se retarder",
    "يتحسّن-improve-améliorer",
    "يتدهور-deteriorate-se détériorer",
    "يتراكم-accumulate-s'accumuler",
    "يتقلّص-contract-rétrécir",
    "يزيد-increase-augmenter",
    "ينقص-decrease-diminuer",
    "يتغيّر-change-changer",
    "يتطوّر-develop-développer",
    "ينظم-organize-organiser",
    "ينجز-accomplish-accomplir",
    "يحقّق-achieve-réaliser",
    "ينجز-perform-accomplir",
    "ينهي-finish-terminer",
    "يكمل-complete-achever",
    "يخفق-fail-échouer",
    "يتعاون-collaborate-collaborer",
    "يتنافس-compete-concourir",
    "يساهم-contribute-contribuer",
    "يشجّع-encourage-encourager",
    "يدعم-support-soutenir",
    "يؤثّر-affect-influencer",
    "يحثّ-urge-inciter",
    "يصدّق-believe-croire",
    "يحبّ-prefer-préférer",
    "يرفض-refuse-refuser",
    "يحاول-try-essayer",
    "يخطّط-plan-planifier",
    "يفكّر-think-penser",
    "يفكّر-think-réfléchir",
    "يتخيّل-imagine-imaginer"
]

function createElt(firstP, lastP, nbrP) {
    let indexElt = [];
    for (let i = 0; i < nbrP; i++)
        indexElt.push(parseInt(Math.random() * tab.length));
    indexElt.forEach(indexElt => {
        let Elt = tab[indexElt];
        let k = Elt.split('-');
        firstdiv.innerHTML += `
            <article>
            <p value='${indexElt}'>${k[firstP]}</p>
            <span>=></span>
                <div></div>
            </article>
        `
    })
    indexElt = indexElt.sort()
    indexElt.forEach(indexElt => {
        let Elt = tab[indexElt];
        let k = Elt.split('-');
        lastdiv.innerHTML += `
        <p draggable="true" value='${indexElt}'>${k[lastP]}</p>
        `
    })
}

function addDraggable() {
    let p1 = document.querySelectorAll('div:first-of-type p');
    let div = document.querySelectorAll('div:last-of-type article div');
    let mot;

    p1.forEach(e => {
        e.addEventListener('dragstart', () => {
            parent = e.parentElement;
            mot = e;
        })
        e.addEventListener('dragend', () => {
            mot = null;
        })
    })

    div.forEach(e => {
        e.addEventListener('dragover', (r) => {
            r.preventDefault();
            e.style = 'box-shadow: 0 0 3px 3px gray;transform: scale(1.1);';
        })
        e.addEventListener('dragleave', () => {
            e.style = 'box-shadow: none;transform: none;';
        })
        e.addEventListener('drop', () => {

            let p = e.querySelector('p')
            if (p) {
                parent.append(p)
            };

            e.append(mot);
            e.style = 'box-shadow: none;transform: none;';
        })
    })
}
let parent;
function createElt2() {
    let inp = document.querySelector('input:checked');
    let elt = document.querySelectorAll('div:last-of-type > article,div:first-of-type p');
    elt.forEach(r => { r.remove() });
    let a = inp.value.split('-');
    createElt(a[0], a[1], select.value);
    addDraggable()
}

let lastdiv = document.querySelector('div:first-of-type');
let firstdiv = document.querySelector('div:last-of-type');
let select = document.querySelector('select');
createElt(0, 2, select.value);

addDraggable();
let btn = document.querySelector('button');
let btn2 = document.querySelector('button:last-of-type');

btn.onclick = () => {
    let p = document.querySelectorAll('div > article > p');
    let div = document.querySelectorAll('div > article > div');
    let count = 0;

    div.forEach((e, i) => {
        let p2 = e.querySelector('p')
        if (p2 != null) {
            if (p[i].getAttribute('value') != p2.getAttribute('value')) {
                e.style = 'border:3px solid red;background-color: rgb(253, 169, 169);';
                btn2.style.display = 'none';
                count++
            } else if (p[i].getAttribute('value') == p2.getAttribute('value')) {
                e.style = 'border:3px solid green;background-color: rgb(169, 224, 169);';
                btn2.style.display = 'inline-block'
            }
        } else {
            e.style = 'border:3px solid red;background-color: rgb(253, 169, 169);';
            btn2.style.display = 'none';
            count++
        }
        if (count != 0) {
            btn2.style.display = 'none'
        }
    })
}
btn2.onclick = () => {
    createElt2();
    btn2.style.display = 'none'
}

let input = document.querySelectorAll('input')

input.forEach(e => {
    e.addEventListener('change', () => {
        createElt2()
    })
})
select.onchange = () => {
    createElt2()
}
