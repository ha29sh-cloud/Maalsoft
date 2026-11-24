(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on')});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target);}})},{threshold:.12});
  els.forEach(function(e,i){e.style.transitionDelay=(i%3)*90+'ms';io.observe(e)});
})();
(function(){
  var root=document.documentElement,btn=document.getElementById('tg');
  function isDark(){var t=root.getAttribute('data-theme');return t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;}
  function paint(){btn.textContent=isDark()?'☀':'☾';}
  try{var s=localStorage.getItem('mal-theme');if(s==='dark'||s==='light')root.setAttribute('data-theme',s);}catch(e){}
  paint();
  btn.addEventListener('click',function(){
    var n=isDark()?'light':'dark';
    root.setAttribute('data-theme',n);
    try{localStorage.setItem('mal-theme',n);}catch(e){}
    paint();
  });
})();
(function(){
  var WA='966555391081';        // غيّر رقم واتساب هنا (بدون + وبدون أصفار البداية)
  var MAIL='info@Maal.com';  // غيّر بريد الاستقبال هنا
  function wa(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t);}
  var fab=document.getElementById('fab');
  if(fab)fab.href=wa('مرحباً، أرغب بمعرفة المزيد عن برنامج مال');
  var fw=document.getElementById('fwa');
  if(fw)fw.href=wa('مرحباً، أرغب بمعرفة المزيد عن برنامج مال');
  var fm=document.getElementById('fmail');
  if(fm)fm.href='mailto:'+MAIL;
  var fl=document.getElementById('flogo');
  if(fl)document.querySelectorAll('nav .logo img').forEach(function(i){fl.appendChild(i.cloneNode(true));});
  var f=document.getElementById('demoForm');
  if(!f)return;
  var other=document.getElementById('otherWrap');
  f.bt.addEventListener('change',function(){
    var o=f.bt.value==='other';
    other.hidden=!o; f.ot.required=o;
    if(o)f.ot.focus();
  });
  function build(){
    var type=f.bt.value==='other'?f.ot.value.trim():f.bt.value;
    var l=['طلب تجربة لبرنامج مال','الاسم: '+f.nm.value,'الجوال: '+f.ph.value];
    if(f.em.value)l.push('البريد: '+f.em.value);
    l.push('نوع النشاط: '+type);
    return l.join('\n');
  }
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var via=e.submitter&&e.submitter.value, m=build();
    if(via==='mail'){
      var a=document.createElement('a');
      a.href='mailto:'+MAIL+'?subject='+encodeURIComponent('طلب تجربة برنامج مال')+'&body='+encodeURIComponent(m);
      document.body.appendChild(a);a.click();a.remove();
    }else{
      window.open(wa(m),'_blank','noopener');
    }
  });
})();
(function(){
  var nav=document.querySelector('nav'),mb=document.getElementById('mb');
  if(!nav||!mb)return;
  function set(o){nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',String(o));mb.textContent=o?'✕':'☰';}
  mb.addEventListener('click',function(){set(!nav.classList.contains('open'));});
  nav.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
})();
(function(){
  var DC='AF:93,AL:355,DZ:213,AS:1684,AD:376,AO:244,AI:1264,AG:1268,AR:54,AM:374,AW:297,AU:61,AT:43,AZ:994,BS:1242,BH:973,BD:880,BB:1246,BY:375,BE:32,BZ:501,BJ:229,BM:1441,BT:975,BO:591,BA:387,BW:267,BR:55,IO:246,VG:1284,BN:673,BG:359,BF:226,BI:257,KH:855,CM:237,CA:1,CV:238,KY:1345,CF:236,TD:235,CL:56,CN:86,CO:57,KM:269,CG:242,CD:243,CK:682,CR:506,CI:225,HR:385,CU:53,CW:599,CY:357,CZ:420,DK:45,DJ:253,DM:1767,DO:1,EC:593,EG:20,SV:503,GQ:240,ER:291,EE:372,SZ:268,ET:251,FK:500,FO:298,FJ:679,FI:358,FR:33,GF:594,PF:689,GA:241,GM:220,GE:995,DE:49,GH:233,GI:350,GR:30,GL:299,GD:1473,GP:590,GU:1671,GT:502,GG:44,GN:224,GW:245,GY:592,HT:509,HN:504,HK:852,HU:36,IS:354,IN:91,ID:62,IR:98,IQ:964,IE:353,IM:44,IL:972,IT:39,JM:1876,JP:81,JE:44,JO:962,KZ:7,KE:254,KI:686,XK:383,KW:965,KG:996,LA:856,LV:371,LB:961,LS:266,LR:231,LY:218,LI:423,LT:370,LU:352,MO:853,MG:261,MW:265,MY:60,MV:960,ML:223,MT:356,MH:692,MQ:596,MR:222,MU:230,YT:262,MX:52,FM:691,MD:373,MC:377,MN:976,ME:382,MS:1664,MA:212,MZ:258,MM:95,NA:264,NR:674,NP:977,NL:31,NC:687,NZ:64,NI:505,NE:227,NG:234,NU:683,KP:850,MK:389,MP:1670,NO:47,OM:968,PK:92,PW:680,PS:970,PA:507,PG:675,PY:595,PE:51,PH:63,PL:48,PT:351,PR:1787,QA:974,RE:262,RO:40,RU:7,RW:250,WS:685,SM:378,ST:239,SA:966,SN:221,RS:381,SC:248,SL:232,SG:65,SK:421,SI:386,SB:677,SO:252,ZA:27,KR:82,SS:211,ES:34,LK:94,SD:249,SR:597,SE:46,CH:41,SY:963,TW:886,TJ:992,TZ:255,TH:66,TL:670,TG:228,TK:690,TO:676,TT:1868,TN:216,TR:90,TM:993,TC:1649,TV:688,UG:256,UA:380,AE:971,GB:44,US:1,UY:598,UZ:998,VU:678,VA:379,VE:58,VN:84,VI:1340,WF:681,YE:967,ZM:260,ZW:263,BQ:599,SX:1721,AX:358,SH:290,PM:508,MF:590,BL:590';
  var f=document.getElementById('demoForm'); if(!f)return;
  var btn=document.getElementById('cc'),list=document.getElementById('ccList'),items=document.getElementById('ccItems'),
      search=document.getElementById('ccSearch'),flagEl=document.getElementById('ccFlag'),codeEl=document.getElementById('ccCode'),
      phn=f.phn,ph=f.ph,box=document.getElementById('phoneField');
  var L=DC.split(',').map(function(x){var p=x.split(':');return {iso:p[0],dial:p[1]};}),M={};
  L.forEach(function(c){M[c.iso]=c;});
  var PRI=['SA','AE','KW','QA','BH','OM','YE','IQ','JO','EG','SD','SY','LB','PS','LY','TN','DZ','MA','TR','PK','IN'];
  var T={sa:{ar:'أدخل رقم جوال صحيحاً ',en:'Enter a valid mobile number'},gen:{ar:'أدخل رقم جوال صحيحاً',en:'Enter a valid mobile number'},none:{ar:'لا توجد نتائج',en:'No results'}};
  var cur='SA',lang='ar',dn={},nc={},ord={};
  var emojiOK=(function(){try{var c=document.createElement('canvas');c.width=c.height=32;var x=c.getContext('2d');x.textBaseline='top';x.font='24px sans-serif';x.fillText('\uD83C\uDDF8\uD83C\uDDE6',0,0);var d=x.getImageData(0,0,32,32).data;for(var i=0;i<d.length;i+=4){if(d[i+3]>0&&(d[i]!==d[i+1]||d[i+1]!==d[i+2]))return true;}return false;}catch(e){return true;}})();
  function nm(iso,l){var k=l+iso;if(nc[k])return nc[k];var v=iso;try{dn[l]=dn[l]||new Intl.DisplayNames([l],{type:'region'});v=dn[l].of(iso)||iso;}catch(e){}return nc[k]=v;}
  function order(l){if(ord[l])return ord[l];var pri=PRI.map(function(i){return M[i];}).filter(Boolean);var rest=L.filter(function(c){return PRI.indexOf(c.iso)<0;}).sort(function(a,b){return nm(a.iso,l).localeCompare(nm(b.iso,l),l);});return ord[l]=pri.concat(rest);}
  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function norm(t){return t.toLowerCase().replace(/[\u064B-\u0652]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي');}
  function flag(iso){
    if(emojiOK)return '<span class="fe">'+String.fromCodePoint.apply(null,iso.split('').map(function(c){return 127397+c.charCodeAt(0);}))+'</span>';
    return '<img class="fi" data-c="'+iso+'" src="https://flagcdn.com/24x18/'+iso.toLowerCase()+'.png" width="24" height="18" alt="" loading="lazy">';
  }
  document.addEventListener('error',function(e){var t=e.target;if(t&&t.classList&&t.classList.contains('fi')){var s=document.createElement('span');s.className='fc';s.textContent=t.getAttribute('data-c');t.replaceWith(s);}},true);
  function digits(){
    var raw=phn.value.trim(),d=raw.replace(/\D/g,''),dial=M[cur].dial;
    if(/^(\+|00)/.test(raw)){d=d.replace(/^00/,'');if(d.indexOf(dial)===0)d=d.slice(dial.length);}
    return d.replace(/^0+/,'');
  }
  function sync(){var d=digits();ph.value=d?('+'+M[cur].dial+d):'';}
  function validate(){
    var d=digits();
    if(!d){phn.setCustomValidity('');return;}
    var ok=cur==='SA'?/^5\d{8}$/.test(d):(d.length>=5&&d.length<=14);
    phn.setCustomValidity(ok?'':(cur==='SA'?T.sa[lang]:T.gen[lang]));
  }
  function paint(){
    flagEl.innerHTML=flag(cur);codeEl.textContent='+'+M[cur].dial;
    phn.placeholder=cur==='SA'?'5xxxxxxxx':(lang==='ar'?'رقم الجوال':'Phone number');
  }
  function render(q){
    q=norm(q||'');var out=[],other=lang==='ar'?'en':'ar';
    order(lang).forEach(function(c){
      var n1=nm(c.iso,lang);
      if(q&&norm(n1+' '+nm(c.iso,other)+' '+c.iso+' +'+c.dial+' '+c.dial).indexOf(q)<0)return;
      out.push('<li role="option" data-i="'+c.iso+'"'+(c.iso===cur?' aria-selected="true"':'')+'>'+flag(c.iso)+'<span class="cn">'+esc(n1)+'</span><span class="cd">+'+c.dial+'</span></li>');
    });
    items.innerHTML=out.join('')||'<li class="ce">'+T.none[lang]+'</li>';
  }
  function open(){
    list.hidden=false;btn.setAttribute('aria-expanded','true');search.value='';render('');
    var s=items.querySelector('[aria-selected="true"]');if(s)items.scrollTop=Math.max(0,s.offsetTop-items.clientHeight/2);
    search.focus();
  }
  function close(){list.hidden=true;btn.setAttribute('aria-expanded','false');}
  function choose(iso){cur=iso;paint();close();sync();validate();phn.focus();}
  btn.addEventListener('click',function(){list.hidden?open():close();});
  items.addEventListener('click',function(e){var li=e.target.closest('li[data-i]');if(li)choose(li.getAttribute('data-i'));});
  search.addEventListener('input',function(){render(search.value);});
  search.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();var li=items.querySelector('li[data-i]');if(li)choose(li.getAttribute('data-i'));}});
  document.addEventListener('click',function(e){if(!list.hidden&&!box.contains(e.target))close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!list.hidden){close();btn.focus();}});
  phn.addEventListener('input',function(){sync();validate();});
  document.addEventListener('mal:lang',function(e){lang=e.detail;list.dir=lang==='ar'?'rtl':'ltr';paint();validate();if(!list.hidden)render(search.value);});
  paint();
})();
(function(){
  var D={"المميزات": "Features", "كيف يعمل": "How it works", "الأمان": "Security", "الأسعار": "Pricing", "الأسئلة": "FAQ", "ابدأ مجاناً": "Start free", "تبديل الوضع الفاتح والداكن": "Toggle light / dark mode", "القائمة": "Menu", "مال": "Maal", "برنامج محاسبة سحابي": "Cloud accounting software", "مال يجمع الفواتير والمخزون والمصروفات والتقارير في مكان واحد. بدون تثبيت وبدون تعقيد، وتبدأ خلال دقائق.": "Maal brings invoices, inventory, expenses and reports together in one place. No installation and no complexity — get started in minutes.", "جرّب مجاناً 14 يوماً": "Try free for 14 days", "اكتشف المميزات": "Explore features", "لا حاجة لبطاقة ائتمانية": "No credit card required", "شاهد البرنامج من الداخل": "See the software from the inside", "واجهة عربية واضحة تعرف طريقك فيها من أول مرة.": "A clear interface you can find your way around from the very first use.", "لوحة التحكم": "Dashboard", "كل أنظمتك من شاشة واحدة": "All your systems from one screen", "المحاسبة والمبيعات والمخازن ونقاط البيع والتقارير، مع متابعة إيراد الشهر وشاشاتك المفضلة.": "Accounting, sales, inventory, point of sale and reports, with monthly revenue tracking and your favorite screens.", "البيع المباشر": "Direct sales", "فاتورة بيع في ثوانٍ": "A sales invoice in seconds", "ابحث عن الصنف أو امسح الباركود، وطبّق الخصم بالمبلغ أو بالنسبة، وشاهد الإجمالي فوراً قبل الدفع.": "Search for an item or scan the barcode, apply a discount by amount or percentage, and see the total instantly before payment.", "شاشة فاتورة البيع المباشر": "Direct sales invoice screen", "الواجهة الرئيسية لنظام مال": "Maal main dashboard", "كل ما تحتاجه لإدارة أعمالك": "Everything you need to run your business", "أدوات بسيطة توفر وقتك وتعطيك رؤية واضحة لوضعك المالي.": "Simple tools that save you time and give you a clear view of your finances.", "فواتير احترافية": "Professional invoices", "أنشئ فواتير وعروض أسعار بشعارك وأرسلها للعميل بنقرة واحدة.": "Create invoices and quotes with your logo and send them to the customer in one click.", "إدارة المخزون": "Inventory management", "تابع الكميات والمستودعات مع تنبيهات فورية عند قرب النفاد.": "Track quantities and warehouses with instant alerts when stock runs low.", "تقارير فورية": "Instant reports", "أرباح وخسائر وميزانية وتقارير مبيعات جاهزة في ثوانٍ.": "Profit and loss, balance sheet and sales reports ready in seconds.", "من أي جهاز": "From any device", "يعمل على الحاسوب والجوال والتابلت دون تثبيت أي برنامج.": "Works on computer, mobile and tablet without installing any software.", "أمان ونسخ احتياطي": "Security and backup", "بياناتك مشفّرة ومحفوظة تلقائياً، مع صلاحيات لكل مستخدم.": "Your data is encrypted and saved automatically, with permissions for each user.", "عمل جماعي": "Teamwork", "أضف فريقك ومحاسبك وحدّد ما يستطيع كل واحد منهم رؤيته وتعديله.": "Add your team and your accountant and set what each of them can view and edit.", "ابدأ في ثلاث خطوات": "Get started in three steps", "بدون تعقيد وبدون خبرة تقنية.": "No complexity and no technical experience needed.", "أنشئ حسابك": "Create your account", "سجّل ببريدك الإلكتروني في أقل من دقيقة.": "Sign up with your email in under a minute.", "أضف بياناتك": "Add your data", "استورد العملاء والمنتجات من ملف Excel بسهولة.": "Import customers and products from an Excel file easily.", "ابدأ العمل": "Start working", "أصدر فواتيرك وتابع تقاريرك من لوحة واحدة.": "Issue your invoices and follow your reports from one dashboard.", "بياناتك في أيدٍ أمينة": "Your data is in safe hands", "حساباتك أمانة عندنا، ولذلك بنينا مال على أسس تحمي بياناتك وتبقيها متاحة دائماً.": "Your accounts are a trust with us, so we built Maal on foundations that protect your data and keep it always available.", "اتصال مشفّر": "Encrypted connection", "تنتقل بياناتك بين جهازك والخدمة عبر اتصال مشفّر.": "Your data travels between your device and the service over an encrypted connection.", "نسخ احتياطي تلقائي": "Automatic backup", "تُحفظ نسخ من بياناتك تلقائياً حتى لا تفقدها عند أي طارئ.": "Copies of your data are saved automatically so you never lose it in an emergency.", "صلاحيات دقيقة": "Granular permissions", "حدّد لكل مستخدم ما يراه ويعدّله داخل النظام.": "Set what each user can view and edit inside the system.", "خطط تناسب حجم عملك": "Plans that fit the size of your business", "اشترك شهرياً وألغِ في أي وقت.": "Subscribe monthly and cancel any time.", "الأساسية": "Basic", "ر.س / شهرياً": "SAR / month", "مستخدم واحد": "One user", "100 فاتورة شهرياً": "100 invoices per month", "تقارير أساسية": "Basic reports", "اشترك الآن": "Subscribe now", "الاحترافية": "Professional", "حتى 5 مستخدمين": "Up to 5 users", "فواتير غير محدودة": "Unlimited invoices", "دعم ذو أولوية": "Priority support", "المؤسسات": "Enterprise", "مستخدمون غير محدودين": "Unlimited users", "فروع متعددة": "Multiple branches", "ربط عبر API": "API integration", "مدير حساب خاص": "Dedicated account manager", "تواصل معنا": "Contact us", "أسئلة يسألها العملاء": "Questions customers ask", "لم تجد جوابك؟ راسلنا وسنساعدك.": "Didn’t find your answer? Message us and we’ll help.", "هل أحتاج إلى تثبيت برنامج؟": "Do I need to install software?", "لا، مال يعمل من المتصفح على الحاسوب والجوال والتابلت، فتبدأ العمل مباشرة بعد إنشاء حسابك.": "No, Maal runs in the browser on computer, mobile and tablet, so you start working right after creating your account.", "هل أستطيع نقل بياناتي من ملفات Excel؟": "Can I move my data from Excel files?", "نعم، يمكنك استيراد العملاء والمنتجات من ملف Excel عند بدء الاستخدام.": "Yes, you can import customers and products from an Excel file when you start.", "هل يمكن لأكثر من شخص استخدام الحساب؟": "Can more than one person use the account?", "نعم، يختلف عدد المستخدمين حسب الخطة، ويمكنك تحديد صلاحيات كل مستخدم.": "Yes, the number of users depends on the plan, and you can set permissions for each user.", "هل أستطيع إلغاء الاشتراك؟": "Can I cancel my subscription?", "نعم، الاشتراك شهري ويمكنك إلغاؤه في أي وقت.": "Yes, the subscription is monthly and you can cancel it any time.", "كيف أتواصل مع الدعم؟": "How do I contact support?", "تواصل معنا عبر واتساب بالزر الظاهر في الصفحة، وسنرد عليك في أقرب وقت.": "Contact us on WhatsApp using the button on the page and we’ll reply as soon as possible.", "جرّب مال مع فريقنا": "Try Maal with our team", "اترك بياناتك وسنتواصل معك عبر واتساب لتجهيز تجربتك المجانية وشرح البرنامج لنشاطك.": "Leave your details and we’ll contact you on WhatsApp to set up your free trial and walk you through the software for your business.", "الاسم": "Name", "اكتب اسمك": "Enter your name", "رقم الجوال": "Mobile number", "اختر رمز الدولة": "Choose country code", "ابحث عن دولة أو رمز": "Search country or code", "البريد الإلكتروني (اختياري)": "Email (optional)", "نوع النشاط": "Business type", "اختر نوع النشاط": "Choose business type", "اكتب نشاطك": "Type your business", "مثال: مصنع عبوات بلاستيكية": "e.g. Plastic packaging factory", "تفاصيل إضافية (اختياري)": "Additional details (optional)", "مثال: عدد الفروع أو ما تحتاجه من البرنامج": "e.g. number of branches or what you need from the software", "إرسال عبر واتساب": "Send via WhatsApp", "إرسال عبر البريد": "Send via email", "سيُفتح واتساب أو تطبيق البريد برسالة جاهزة، وتؤكد الإرسال بنفسك.": "WhatsApp or your email app will open with a ready message, and you confirm sending yourself.", "تواصل عبر واتساب": "Chat on WhatsApp", "برنامج محاسبة سحابي لإدارة الفواتير والمخزون والتقارير من أي مكان وبكل سهولة.": "Cloud accounting software for managing invoices, inventory and reports from anywhere, with ease.", "روابط الصفحة": "Page links", "اطلب تجربتك": "Request your trial", "واتساب": "WhatsApp", "البريد الإلكتروني": "Email", "© 2026 مال. جميع الحقوق محفوظة.": "© 2026 Maal. All rights reserved.", "سياسة الخصوصية": "Privacy policy", "الشروط والأحكام": "Terms and conditions", "تجارة وتجزئة": "Retail and trade", "متجر تجزئة": "Retail store", "سوبرماركت وبقالة": "Supermarket and grocery", "تجارة جملة وتوزيع": "Wholesale and distribution", "متجر إلكتروني": "Online store", "إلكترونيات وجوالات": "Electronics and mobiles", "ملابس وأزياء": "Clothing and fashion", "عطور ومستحضرات تجميل": "Perfumes and cosmetics", "أثاث ومفروشات": "Furniture and furnishings", "مكتبة وقرطاسية": "Bookstore and stationery", "هدايا وورود": "Gifts and flowers", "مستلزمات منزلية": "Household supplies", "ألعاب ومستلزمات أطفال": "Toys and kids’ supplies", "أغذية ومشروبات": "Food and beverage", "مطعم": "Restaurant", "كافيه ومقهى": "Cafe and coffee shop", "مخبز وحلويات": "Bakery and sweets", "كاترينج وتموين": "Catering", "محمصة وبهارات": "Roastery and spices", "مصنع أغذية": "Food factory", "متجر خضار وفواكه": "Fruit and vegetable shop", "ملحمة ولحوم": "Butcher and meats", "صحة وجمال": "Health and beauty", "عيادة أو مركز طبي": "Clinic or medical center", "عيادة أسنان": "Dental clinic", "صيدلية": "Pharmacy", "مختبر طبي": "Medical laboratory", "صالون وعناية": "Salon and grooming", "مركز تجميل وسبا": "Beauty center and spa", "نادٍ رياضي ولياقة": "Gym and fitness", "نظارات وبصريات": "Optics and eyewear", "سيارات ونقل": "Cars and transport", "ورشة صيانة سيارات": "Car repair workshop", "قطع غيار سيارات": "Auto parts", "معرض سيارات": "Car showroom", "مغسلة سيارات": "Car wash", "تأجير سيارات": "Car rental", "نقل وشحن وخدمات لوجستية": "Transport, shipping and logistics", "مكتب استقدام وتخليص": "Recruitment and clearance office", "صناعة ومقاولات": "Industry and contracting", "مقاولات وبناء": "Contracting and construction", "مصنع وصناعة": "Factory and manufacturing", "أدوات ومواد بناء": "Building tools and materials", "كهرباء وسباكة": "Electrical and plumbing", "مصنع أثاث ونجارة": "Furniture factory and carpentry", "حدادة وألمنيوم": "Blacksmith and aluminum", "مطبعة": "Print shop", "صيانة أجهزة ومعدات": "Equipment maintenance", "زراعة ومزرعة": "Agriculture and farm", "خدمات مهنية وتجارية": "Professional and business services", "مكتب محاسبة": "Accounting office", "مكتب محاماة واستشارات": "Law and consulting office", "مكتب عقاري": "Real estate office", "تسويق ودعاية": "Marketing and advertising", "تصميم وطباعة": "Design and printing", "تصوير وإنتاج": "Photography and production", "خدمات رقمية وبرمجة": "Digital services and software", "تنظيف وصيانة منشآت": "Facility cleaning and maintenance", "مغسلة ملابس": "Laundry", "تأمين ووساطة": "Insurance and brokerage", "تعليم وتدريب": "Education and training", "مدرسة أو معهد": "School or institute", "مركز تدريب": "Training center", "حضانة": "Nursery", "مركز دروس خصوصية": "Tutoring center", "سياحة وضيافة وفعاليات": "Tourism, hospitality and events", "فندق وشقق مفروشة": "Hotel and furnished apartments", "مكتب سياحة وسفر": "Travel and tourism office", "تنظيم فعاليات وحفلات": "Events and parties organizing", "قاعات أفراح ومناسبات": "Wedding and event halls", "أخرى": "Other", "جمعية أو منظمة غير ربحية": "Non-profit organization", "جهة حكومية أو شبه حكومية": "Government or semi-government entity", "نشاط آخر (غير موجود في القائمة)": "Other business (not in the list)"};
  var HE={ar:'',en:'Your accounts, <em>crystal clear</em>,<br>from anywhere'},TT=["مال – برنامج المحاسبة السحابي", "Maal – Cloud Accounting Software"],MD=["مال: برنامج محاسبة سحابي للفواتير والمخزون والتقارير، يعمل من أي جهاز.", "Maal: cloud accounting software for invoices, inventory and reports, working from any device."];
  var lg=document.getElementById('lg'),h=document.querySelector('h1'),md=document.querySelector('meta[name="description"]');
  if(!lg)return;
  HE.ar=h.innerHTML;
  Array.prototype.forEach.call(document.querySelectorAll('#demoForm option'),function(o){if(!o.hasAttribute('value'))o.value=o.textContent.trim();});
  var nodes=[],attrs=[],w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
  while((n=w.nextNode())){
    var pn=n.parentNode&&n.parentNode.nodeName;if(pn==='SCRIPT'||pn==='STYLE')continue;
    var k=n.nodeValue.replace(/\s+/g,' ').trim();
    if(k&&D[k])nodes.push([n,n.nodeValue,k]);
  }
  Array.prototype.forEach.call(document.querySelectorAll('[placeholder],[aria-label],[alt],[title],optgroup[label]'),function(el){
    ['placeholder','aria-label','alt','title','label'].forEach(function(a){
      if(!el.hasAttribute(a))return;
      var v=el.getAttribute(a).replace(/\s+/g,' ').trim();
      if(D[v])attrs.push([el,a,el.getAttribute(a),v]);
    });
  });
  function set(l,save){
    var en=l==='en';
    nodes.forEach(function(x){var lead=x[1].match(/^\s*/)[0],trail=x[1].match(/\s*$/)[0];x[0].nodeValue=en?lead+D[x[2]]+trail:x[1];});
    attrs.forEach(function(a){a[0].setAttribute(a[1],en?D[a[3]]:a[2]);});
    h.innerHTML=en?HE.en:HE.ar;
    document.title=en?TT[1]:TT[0];
    if(md)md.setAttribute('content',en?MD[1]:MD[0]);
    var r=document.documentElement;r.lang=l;r.dir=en?'ltr':'rtl';
    lg.textContent=en?'ع':'EN';lg.setAttribute('aria-label',en?'العربية':'English');
    if(save){try{localStorage.setItem('mal-lang',l);}catch(e){}}
    document.dispatchEvent(new CustomEvent('mal:lang',{detail:l}));
    lang=l;
  }
  var lang='ar',saved=null;
  try{saved=localStorage.getItem('mal-lang');}catch(e){}
  lg.addEventListener('click',function(){set(lang==='ar'?'en':'ar',true);});
  set(saved==='en'?'en':'ar',false);
})();

document.querySelectorAll('.clogos').forEach(slider => {
  if (slider.dataset.initialized) return;
  slider.dataset.initialized = 'true';

  const track = document.createElement('div');
  track.className = 'clogos-track';

  [...slider.children].forEach(logo => track.appendChild(logo));
  slider.appendChild(track);

  let timer;

  function moveNext() {
    const first = track.firstElementChild;
    if (!first) return;

    const step = first.getBoundingClientRect().width +
      parseFloat(getComputedStyle(track).gap);

    track.style.transition = 'transform .6s ease';
    track.style.transform = `translateX(-${step}px)`;

    track.addEventListener('transitionend', function reset() {
      track.removeEventListener('transitionend', reset);
      track.style.transition = 'none';
      track.appendChild(track.firstElementChild);
      track.style.transform = 'translateX(0)';
    }, { once: true });
  }

  timer = setInterval(moveNext, 3000);
});


