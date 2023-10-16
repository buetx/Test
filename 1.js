
  var d={
  "ম্যাট্রিক্স ও নির্ণায়ক":{"lecture 1:"","lecture 2":"http://root.bdff.workers.dev/0:/Acs/Matrix-lecture2.mp4"}
  } 
    var db={
  "ম্যাট্রিক্স ও নির্ণায়ক":{"lecture 1":"https://www.videovor.com/download/?token=65f4d13fe1d612738398d48d17126a181c9030e1&vk=vgVvOwwkS1qFt8duxa30V7yWjmsg7QyfouHxlC4WvIc&fn=Matrix-lecture1.mp4","lecture 2":"https://drive.google.com/uc?id=18K-ISV9TSM3r0J06yviMNhLXgYfAcNk3&export=download"},
        "ভেক্টর":{"lecture 1":"https://drive.google.com/uc?id=1eSzCtoVyk5AhJmNber9BPBMQWw555zJJ&export=download"}
  } 


  

    function step3(clicked) {
    document.body.innerHTML=`<h1>${clicked}</h1><div  id="3rd"></div>`
   
   for (let i = 0; i < Object.keys(db[clicked]).length ; i++) {
    (function (link){
      let h4 = document.createElement("h4");
    h4.setAttribute('class', 'h4')
       h4.addEventListener("click", function() {
   window.open(link,"_self"); })
        h4.innerText = Object.keys(db[clicked])[i]
    document.getElementById('3rd').append(h4)
      })(db[clicked][Object.keys(db[clicked])[i]]);
    
    }

};
function selectedm2() {
    d = document.getElementById("m2-sel").value;
    alert(d);
}
//-----------------------------------------------------------------

function topp(){window.scrollTo(0,0);};
document.getElementById("m1").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >ম্যাট্রিক্স ও নির্ণায়ক</li>
    <li >সরলরেখা</li>
    <li >বৃত্ত</li>
    <li >ত্রিকোণমিতি</li>
    <li >অন্তরীকরণ</li>
    <li >যোগজীকরণ</li>
    </ul>
    `
    
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};

document.getElementById("m2").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >জটিল সংখ্যা</li>
    <li >বহুপদী সমীকরণ</li>
    <li >কণিক</li>
    <li >বিপরীত ত্রিকোণমিতি</li>
    <li >স্থিতিবিদ্যা</li>
    <li >গতিবিদ্যা</li>
    </ul>`
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}
};

document.getElementById("p1").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >ভেক্টর</li>
    <li >নিউটনিয়ান বলবিদ্যা</li>
    <li >কাজ, শক্তি ও ক্ষমতা</li>
    <li >মহাকর্ষ ও অভিকর্ষ</li>
    <li >পদার্থের গাঠনিক ধর্ম</li>
    <li >পর্যাবৃত্ত গতি</li>
    <li >আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব</li>
    </ul>
    `

    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};

document.getElementById("p2").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >তাপগতিবিদ্যা</li>
    <li >স্থির তড়িৎ</li>
    <li >চলতড়িৎ</li>
    <li >ভৌত আলোকবিজ্ঞান</li>
    <li >আধুনিক পদার্থবিজ্ঞানের সূচনা</li>
    <li >পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান</li>
    <li >সেমিকন্ডাক্টর ও ইলেকট্রনিকস</li>
    </ul>
    `
   
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};

document.getElementById("c1").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >ল্যাবরেটরির নিরাপদ ব্যবহার</li>
    <li >গুণগত রসায়ন</li>
    <li >মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন</li>
    <li >রাসায়নিক পরিবর্তন</li>
    <li >কর্মমুখী রসায়ন</li>
    </ul>
    `
   
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};

document.getElementById("c2").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >পরিবেশ রসায়ন</li>
    <li >জৈব রসায়ন</li>
    <li >পরিমাণগত রসায়ন</li>
    <li >তড়িৎ রসায়ন</li>
    <li >অর্থনৈতিক রসায়ন</li>
    </ul>
    `
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};

document.getElementById("b1").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >কোষ ও এর গঠন</li>
    <li >কোষ বিভাজন</li>
    <li >কোষ রসায়ন</li>
    <li >অণুজীব</li>
    <li >শৈবাল ও ছত্রাক</li>
    <li >ব্রায়োফাইটা ও টেরেডোফাইটা</li>
    <li >নগ্নবীজী ও আবৃতবীজী উদ্ভিদ</li>
    <li >টিস্যু ও টিস্যুতন্ত্র</li>
    <li >উদ্ভিদ শারীরতত্ত্ব</li>
    <li >উদ্ভিদ প্রজনন</li>
    <li >জীবপ্রযুক্তি</li>
    <li >জীবের পরিবেশ, বিস্তার ও সংরক্ষণ</li>
    </ul>
    `
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};

document.getElementById("b2").onclick=function ()
{
  document.body.innerHTML=`
    <ul id="ul">
    <li >প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস</li>
    <li >প্রাণীর পরিচিতি</li>
    <li >পরিপাক ও শোষণ</li>
    <li >রক্ত সঞ্চালন</li>
    <li >শ্বাসক্রিয়া ও শ্বসন</li>
    <li >বর্জ্য ও নিষ্কাশন</li>
    <li >চলন ও অঙ্গচালনা</li>
    <li >সমন্বয় ও নিয়ন্ত্রণ</li>
    <li >মানব জীবনের ধারাবাহিকতা</li>
    <li >মানবদেহের প্রতিরক্ষা</li>
    <li >জীনতত্ত্ব ও বিবর্তন</li>
    <li >প্রানির আচরণ</li>
    </ul>
    `
    setTimeout(topp, 10);
    document.getElementById('ul')
    .onclick = function(event) {step3(event.target.innerHTML);}

};
