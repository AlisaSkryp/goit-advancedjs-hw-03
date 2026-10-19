import{a as m,S as d,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="58099852-3518d9875dd19045495c0633a",g="https://pixabay.com/api/";function h(n){const r={key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img 
            class="gallery-image" 
            src="${o}" 
            alt="${e}" 
            loading="lazy" 
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> <span>${t}</span></p>
          <p class="info-item"><b>Views</b> <span>${i}</span></p>
          <p class="info-item"><b>Comments</b> <span>${u}</span></p>
          <p class="info-item"><b>Downloads</b> <span>${p}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const $=document.querySelector(".form");$.addEventListener("submit",q);function q(n){n.preventDefault();const r=n.currentTarget,o=r.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query before submitting!",position:"topRight"});return}L(),S(),h(o).then(s=>{if(!s.hits||s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{a.error({message:`An error occurred: ${s.message||"Something went wrong"}`,position:"topRight"})}).finally(()=>{w(),r.reset()})}
//# sourceMappingURL=index.js.map
