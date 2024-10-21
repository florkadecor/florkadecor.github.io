$(document).ready(function () {
  const { search, hash, origin } = window.location;

  const stopLoadingUI = function () {
    const el = document.querySelector(".lottie-loading");
    if (el) {
      const child = el.querySelector("lottie-player");
      if (child) {
        child.classList.add("is-shrinking");
      }
      el.classList.add("is-invisible");
      document.body.classList.remove("is-loading");
      setTimeout(function () {
        el.remove();
      }, 1500);
    }
  };

  if (hash) {
    const el = document.querySelector(hash);
    if(el){
      const topPos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos,
      });
    }
  }

  const planPath = "/individu/layanan/goodplan-bca";
  const questionPath = "/individu/layanan/goodplan-bca/personal-planner";
  const timelinePath = "/individu/layanan/goodplan-bca/timeline-result-personal-planner";
  const planKey = "plan";
  const resultKey = "result";
  let planName = "";
  let subPlanKey = "subplan";

  const urlParams = new URLSearchParams(search);
  const planParam = urlParams.get(planKey);
  const resultParam = urlParams.get(resultKey);
  const subPlanParams = [];
  urlParams.forEach((value, key) => {
    if (key.startsWith(subPlanKey)) {
      subPlanParams.push([key, value]);
    }
  });
  const subPlanParamsLen = subPlanParams.length;

  let filteredData = [];
  
  try {
    filteredData = dataPlanner || window.dataPlanner;
  } catch (err) {
    planNotFound()
    throw new Error("data planner is required.");
  }
  if (filteredData.length === 0) {
    planNotFound()
    throw new Error("data planner is empty.");
  }
  let hasAnotherQuestion = function () {};

  const getSubPlanKey = function (index) {
    if (index > 0) {
      return subPlanKey + "_" + (index + 1).toString();
    }
    return subPlanKey;
  };

  const buildQuestionPath = function (planId, subPlanId) {
    let path = questionPath + "?";
    if (!subPlanId || planId === subPlanId) {
      path += `${planKey}=${planId}`;
    } else {
      path += `${getSubPlanKey(subPlanParamsLen)}=${subPlanId}&`;
      subPlanParams.forEach((param) => {
        path += `${param[0]}=${param[1]}&`;
      });
      path += `${planKey}=${planId}`;
    }
    return path;
  };
  const buildTimelinePath = function (resultId, planId) {
    let path = timelinePath + `?${resultKey}=${resultId}&`;
    subPlanParams.forEach((param) => {
      path += `${param[0]}=${param[1]}&`;
    });
    path += `${planKey}=${planId}`;
    return path;
  };

  const setDataAttribute = function (node, data) {
    if (data) {
      if (data.itemid !== undefined) node.setAttribute("id", data.itemid);
      if (data.template !== undefined)
        node.setAttribute("data-template", data.template);
    }
    return node;
  };

  const planItem = document.getElementById("plan-item");
  const planPertanyaan = document.getElementById("plan-pertanyaan");
  const planTimeline = document.getElementById("plan-timeline");

  if (planPertanyaan) {
    if (subPlanParamsLen > 0) {
      // Add Back to Previous Question URL
      const currentParams = new URLSearchParams(search);
      if (subPlanParamsLen === 1) {
        currentParams.delete(subPlanParams[0][0]);
      } else {
        currentParams.delete("subplan_" + subPlanParamsLen.toString());
      }
      const previousUrl = window.location.href
        .replace(location.search, "")
        .concat("?" + currentParams.toString());
      document.querySelector(".lightbox__close").href = previousUrl;
    }
  }

  if (planParam) {
    filteredData = filteredData.filter((plan) => plan.itemid === planParam)[0];
    if (!filteredData) {
      dataNotFoundPage();
      throw new Error("plan id is not found, please change `plan` param value");
    }
    planName = filteredData.text;

    hasAnotherQuestion = function (optionId) {
      const filteredOption = filteredData.next.options.filter(
        (option) => option.itemid === optionId
      )[0];
      return filteredOption.next.question !== undefined;
    };

    if (subPlanParamsLen) {
      try {
        // params order in url is reversed and don't want to mutate the original array
        subPlanParams
          .slice()
          .reverse()
          .forEach((param) => {
            filteredData = filteredData.next.options.filter(
              (option) => option.itemid === param[1]
            )[0];
          });
      } catch (err) {
        dataNotFoundPage();
        throw new Error(
          "subplan id is not found, please change `subplan` param value"
        );
      }
      if (!filteredData) {
        dataNotFoundPage();
        throw new Error(
          "subplan id is not found, please change `subplan` param value"
        );
      }
    }

    if (resultParam) {
      filteredData = filteredData.next.options.filter(
        (option) => option.itemid === resultParam
      )[0];
      if (!filteredData) {
        dataNotFoundPage();
        throw new Error(
          "result id is not found, please change `result` param value"
        );
      }
    }
  }

  if (planItem) {
    planItem.removeAttribute("id");
    planItem
      .querySelector(".a-card--icon i")
      .classList.remove("icon-kkb-pembelian-mobil");

    filteredData.forEach(function (value) {
      var clone = planItem.cloneNode(true);
      setDataAttribute(clone, value);
      clone.querySelector(".a-card--title h2").innerText = value.text;
     const cardIcon = clone.querySelector(".a-card--icon i");
      addMultiClass(cardIcon,value.icon);
      clone.querySelector(".card-content a").href = buildQuestionPath(
        value.itemid
      );
      clone.querySelector(".card-content a").classList.add("stretched-link");
      document.getElementById("plan-row").appendChild(clone);
    });

    planItem.remove();
    return;
  }

  if (planPertanyaan) {
    const question = filteredData.next;
    if (!question) {
      dataNotFoundPage();
      throw new Error("plan id is not found, please change `plan` param value");
    }
    if (!question.question) {
      dataNotFoundPage();
      throw new Error(
        "subplan id is not found, please change `subplan` param value"
      );
    }

    setDataAttribute(
      planPertanyaan.querySelector(".a-text.a-text-hero"),
      question
    ).innerText = question.question;

    var planOption = document.getElementById("plan-option");
    if (planOption) {
      planOption.removeAttribute("id");

      question.options.forEach(function (value) {
        var clone = planOption.cloneNode(true);
        setDataAttribute(clone, value);
        clone.classList.remove("hide");
        clone.querySelector(".a-card--title h2").innerText = value.text;
        clone
          .querySelector(".a-card--icon i")
          .classList.remove("icon-korporasi");
        const cardIcon = clone.querySelector(".a-card--icon i");
        addMultiClass(cardIcon, value.icon);

        let cardHref = "";
        const valueId = value.itemid;
        if (!hasAnotherQuestion(valueId)) {
          cardHref = buildTimelinePath(valueId, planParam);
        } else {
          cardHref = buildQuestionPath(planParam, valueId);
        }
        clone.querySelector(".card-content a").href = cardHref;
        clone.querySelector(".card-content a").classList.add("stretched-link");
        document.querySelector("#plan-pertanyaan div").appendChild(clone);
      });

      planOption.remove();
    } else {
      var planOption = document.getElementById("plan-option");
      planPertanyaan.querySelector(".a-text.a-text-hero").innerText =
        "Oops, pertanyaan tidak tersedia";
    }
    stopLoadingUI();
    return;
  }

  if (planTimeline) {
    const result = filteredData.next;
    if (!result) {
      dataNotFoundPage();
      throw new Error(
        "result id is not found, please change `result` param value"
      );
    }
    var planResult = document.getElementById("plan-result");
    var planProduct = document.getElementById("plan-product");
    var planQna = document.getElementById("plan-qna");

    planResult.querySelector("p.a-text-subtitle").innerHTML =
      result.result.title;
    setDataAttribute(
      planResult.querySelector("div.a-text-description"),
      result
    ).innerHTML = result.result.description;

    if (typeof result["result-detail"] !== "undefined") {
      result["result-detail"].forEach(function (value, index) {
        var detail_title = document.createElement("p");
        detail_title.classList.add("a-text");
        detail_title.classList.add("a-text-subtitle");
        detail_title.classList.add("col-md-8");
        detail_title.classList.add("col-xs-12");
        detail_title.innerText = value.title;

        planResult
          .querySelector("div.a-text-description")
          .parentNode.appendChild(detail_title);

        var detail_description = document.createElement("div");
        detail_description.classList.add("col-md-9");
        detail_description.classList.add("a-text");
        detail_description.classList.add("a-text-description");
        detail_description.classList.add("a-text-brownish-grey");
        detail_description.classList.add("my-24");
        detail_description.innerText = value.description;
        setDataAttribute(detail_description, value);

        planResult
          .querySelector("div.a-text-description")
          .parentNode.appendChild(detail_description);
      });
    }

    planResult.classList.remove("hide");

    const timelines = result.timeline;
    let timelinesLen;
    try {
      if (!timelines) {
        throw `'${planName}' > '${filteredData.text}' doesn't have timeline data`;
      }
      timelinesLen = timelines.length;
      if (!timelinesLen) {
        throw `Timeline data for '${planName}' > '${filteredData.text}' must not be empty`;
      }
    } catch (err) {
      dataNotFoundPage();
      throw new Error(err);
    }

    let i = 0;
    while (i < timelinesLen) {
      const timeline = timelines[i];

      if (timeline.type == "product") {
        var clone = planProduct.cloneNode(true);
        clone.classList.remove("hide");
        clone.removeAttribute("id");

        clone
          .querySelector(".a-timeline-planner--content")
          .removeAttribute("id");
        clone.querySelector(".a-text-hero").innerText = timeline.title;
        setDataAttribute(
          clone.querySelector(".a-text-description"),
          timeline
        ).innerText = timeline.description;

        // if (index === timeline.length - 1) {
        //   // clone.querySelector('.a-timeline-planner--content').classList.add('non-active');
        // }

        var colProduct = clone.querySelector(".col--product");
        var rowProduct = clone.querySelector(".row--product");

        if (Array.isArray(timeline.cards)) {
          timeline.cards.forEach(function (v, i) {
            var productInfo = v;
            var cloneProduct = colProduct.cloneNode(true);
            setDataAttribute(cloneProduct, productInfo);
            var linkProductAction = cloneProduct.querySelector(
              ".a-card--product--action"
            );

            cloneProduct.querySelector(".a-text-title").innerText =
              productInfo.title;
            cloneProduct.querySelector(".a-text-paragraph").innerText =
              productInfo.description;

            rowProduct.appendChild(cloneProduct);

            var actions = productInfo.actions;
            if (actions) {
              if (Array.isArray(actions)) {
                actions = [...actions];
              } else {
                actions = [actions];
              }

              for (const act of actions) {
                var cloneProductAction = linkProductAction.cloneNode(true);
                cloneProductAction.href = act.link;
                setDataAttribute(
                  cloneProductAction.querySelector("span"),
                  act
                ).innerText = act.title;
                cloneProduct
                  .querySelector(".a-card--next")
                  .appendChild(cloneProductAction);
              }
            }

            linkProductAction.remove();
          });
        }

        colProduct.remove();

        planTimeline.appendChild(clone);
      }

      if (timeline.type == "qna") {
        var clone = planQna.cloneNode(true);
        clone.classList.remove("hide");
        clone.removeAttribute("id");

        clone.querySelector(".a-text-hero").innerText = timeline.title;
        setDataAttribute(
          clone.querySelector(".a-text-description"),
          timeline
        ).innerText = timeline.description;

        // if (index === timeline.length - 1) {
        //   clone
        //     .querySelector(".a-timeline-planner--content")
        //     .classList.add("non-active");
        // }

        planTimeline.appendChild(clone);
      }

      i += 1;
    }
    // add class li non-active on last item

    planProduct.remove();
    planQna.remove();
    subPlanParams.shift();

    // Call to Action
    const liCTA = document.getElementById("li-cta");
    const clonedCTA = liCTA.cloneNode(true);
    clonedCTA.classList.remove("hide");
    clonedCTA.removeAttribute("id");
    const firstEl = clonedCTA.firstElementChild;
    firstEl.classList.add("non-active");
    firstEl.style.borderLeft = "6px solid transparent";
     const ctaEl = firstEl.querySelector(".a-text-subtitle")
    const ctaDescEl = firstEl.querySelector(".a-text-description")
    const ctaBtnEl = firstEl.querySelector(".a-button")
    let isCtaBtnShown = false;
    if(result.cta){
      const cta = result.cta.cta
      const ctaDesc = result.cta.description
      const ctaBtnLink = result.cta.button_link
      const ctaBtnLabel = result.cta.button_label
      isCtaBtnShown = ctaBtnLink && ctaBtnLabel
      if (cta) {
        ctaEl.textContent = cta;
      }
      if (ctaDesc) {
        ctaDescEl.textContent = ctaDesc;
      } else {
        ctaDescEl.remove()
      }
      if (isCtaBtnShown) {
        ctaBtnEl.href = ctaBtnLink
        ctaBtnEl.textContent = ctaBtnLabel
      } else {
        ctaBtnEl.remove()
      }
    } else {
      ctaDescEl.remove();
      ctaBtnEl.remove();
    }
    let currentParams = new URLSearchParams(search);
    currentParams.delete("result");
    currentParams = currentParams.toString();
    let previousUrl;
    if (currentParams) {
      previousUrl = origin + questionPath + "?" + currentParams;
    } else {
      previousUrl = origin + planPath;
    }
    const backLink = document.createElement("a")
    backLink.classList.add("a-button")
    backLink.href = previousUrl
    backLink.textContent = 'Kembali ke sebelumnya';
    if(result.cta){
      backLink.textContent = result.cta.back;
    }
    if(!isCtaBtnShown) backLink.style.textAlign = "left"
    firstEl.insertAdjacentElement("beforeend", backLink);
    planTimeline.appendChild(clonedCTA);
    liCTA.remove();

    // Share Links
    const copy = document.querySelector('[data-js="copy-to-clip"]');
    const twitter = document.querySelector('[data-js="share-twitter"]');
    const facebook = document.querySelector('[data-js="share-facebook"]');
    copy.dataset.target = copy.dataset.target + search;
    copy.href = "javascript:void(0)";
    twitter.href =
      "https://twitter.com/intent/tweet?url=" +
      twitter.dataset.prefixLink +
      search +
      "&" +
      twitter.dataset.paramsLink;
    facebook.href =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      facebook.dataset.prefixLink +
      search +
      "&" +
      facebook.dataset.paramsLink;

    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const getScrolled = function () {
      return (
        window.scrollY ||
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset
      );
    };
    const modalBoxWrapper = document.querySelector(".modal-box-wrapper");
    const timelineIndicator = document.querySelector(
      ".a-timeline-planner-indicator"
    );
    const modalBoxWrapperHeight =
      modalBoxWrapper.scrollHeight || modalBoxWrapper.offsetHeight;
    const timelineContents = document.querySelectorAll(
      ".a-timeline-planner--content:not(.non-active)"
    );
    let timelineTrackHeight = 0;
    timelineContents.forEach((el) => {
      timelineTrackHeight += el.scrollHeight;
    });

    timelineIndicator.style.maxHeight = `${timelineTrackHeight}px`;
    timelineIndicator.style.height = '0';
    if (viewportHeight >= modalBoxWrapperHeight) {
      timelineIndicator.style.height = timelineIndicator.style.maxHeight;
    }

    var scrolledPos = 0

    $(window).add('body').on("scroll", function () {
      var winScroll = getScrolled(),
        maxScroll = modalBoxWrapperHeight - viewportHeight;
      // fix safari scroll position issue
      scrolledPos = winScroll
      if(!winScroll || scrolledPos === winScroll){
        if(modalBoxWrapper){
          winScroll = Math.abs(modalBoxWrapper.getBoundingClientRect().top)
        }
      }
      timelineIndicator.style.height = `${(timelineTrackHeight * winScroll) / maxScroll}px`
    });
    stopLoadingUI();
  }

  function planNotFound(){
    const bcaPlannerContent = document.getElementById("bcaplanner")
    if(bcaPlannerContent){
      const heroText = bcaPlannerContent.querySelector(".a-text-hero")
      heroText.textContent = "Data tidak ditemukan, silakan refresh halaman atau kembali ke menu sebelumnya."
      heroText.classList.remove("a-text-hero")
      heroText.classList.add("h4")
      bcaPlannerContent.querySelector(".a-text-body").remove()
      const planList = bcaPlannerContent.querySelector("#plan-row")
      if(planList){
        const parent = $(planList).parents('.row')
        if(parent.length){
          parent.remove()
          return
        }
        planList.remove()
      }
    }
  }

  function dataNotFoundPage() {
    document.title = document.title + " - Data Tidak Ditemukan";
    const box = document.querySelector(".modal-box--content");
    if (!box) return;
    const row = box.querySelector(".row");
    if (!row) return;
    row.innerHTML = `
      <div class="col-md-12 col-sm-12 my-48">
        <div class="col-md-12 mb-40">
          <p class="a-text a-text-hero">Oops, data tidak ditemukan</p>
        </div>
      </div>
    `;
    stopLoadingUI()
	  }
  function addMultiClass(targetElement,classesText){
    if(classesText && (typeof classesText === 'string' || classesText instanceof String)){
      const classes = classesText.split(' ');
      if(targetElement && typeof targetElement.classList === 'object'){
        targetElement.classList.add(...classes);
        return targetElement;
      }
    }
	
  }
});