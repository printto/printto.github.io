(function () {
  "use strict";

  function attr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  function media(m) {
    if (!m) return "";
    if (m.type === "youtube") {
      return (
        '<div class="card-img-top embed-responsive embed-responsive-16by9">' +
        '<iframe loading="lazy" src="' + attr(m.src) + '" frameborder="0" allow="" allowfullscreen></iframe>' +
        "</div>"
      );
    }
    if (m.type === "images") {
      return (
        '<div class="embed-responsive"><div class="row">' +
        m.srcs.map(function (s) {
          return '<img src="' + attr(s) + '" style="width: 50%;">';
        }).join("") +
        "</div></div>"
      );
    }
    return '<img class="card-img-top" src="' + attr(m.src) + '">';
  }

  var ICONS = {
    github: {
      vb: "0 0 24 24",
      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    youtube: {
      vb: "0 0 24 24",
      d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
    },
    globe: {
      vb: "0 0 24 24",
      rule: true,
      d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708"
    },
    article: {
      vb: "0 0 24 24",
      d: "M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-16 5h5v-4h-5v4zm12 2h-12v1h12v-1zm0-3h-5v1h5v-1zm0-3h-5v1h5v-1z"
    },
    filters: {
      vb: "0 0 24 24",
      d: "M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"
    },
    itch: {
      vb: "4.4 4.4 23.2 23.2",
      d: "M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"
    },
    steam: {
      vb: "0 0 256 259",
      d: "M127.779 0C60.42 0 5.24 52.412 0 119.014l68.724 28.674a35.812 35.812 0 0 1 20.426-6.366c.682 0 1.356.019 2.02.056l30.566-44.71v-.626c0-26.903 21.69-48.796 48.353-48.796 26.662 0 48.352 21.893 48.352 48.796 0 26.902-21.69 48.804-48.352 48.804-.37 0-.73-.009-1.098-.018l-43.593 31.377c.028.582.046 1.163.046 1.735 0 20.204-16.283 36.636-36.294 36.636-17.566 0-32.263-12.658-35.584-29.412L4.41 164.654c15.223 54.313 64.673 94.132 123.369 94.132 70.818 0 128.221-57.938 128.221-129.393C256 57.93 198.597 0 127.779 0zM80.352 196.332l-15.749-6.568c2.787 5.867 7.621 10.775 14.033 13.47 13.857 5.83 29.836-.803 35.612-14.799a27.555 27.555 0 0 0 .046-21.035c-2.768-6.79-7.999-12.086-14.706-14.909-6.67-2.795-13.811-2.694-20.085-.304l16.275 6.79c10.222 4.3 15.056 16.145 10.794 26.46-4.253 10.314-15.998 15.195-26.22 10.895zm121.957-100.29c0-17.925-14.457-32.52-32.217-32.52-17.769 0-32.226 14.595-32.226 32.52 0 17.926 14.457 32.512 32.226 32.512 17.76 0 32.217-14.586 32.217-32.512zm-56.37-.055c0-13.488 10.84-24.42 24.2-24.42 13.368 0 24.208 10.932 24.208 24.42 0 13.488-10.84 24.421-24.209 24.421-13.359 0-24.2-10.933-24.2-24.42z"
    },
    playstore: {
      vb: "66 64 512 512",
      d: "M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z"
    },
    appstore: {
      vb: "0 0 24 24",
      d: "M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"
    },
    download: {
      vb: "0 0 24 24",
      d: "M11 2h2v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6V2zM3 19h18v3H3z"
    },
    trophy: {
      vb: "0 0 24 24",
      d: "M7 2h10v1h4v3a5 5 0 0 1-4.5 5A5.5 5.5 0 0 1 13 14.4V18h4v3H7v-3h4v-3.6a5.5 5.5 0 0 1-3.5-3.4A5 5 0 0 1 3 6V3h4V2zm0 3H5v1a3 3 0 0 0 2 2.8V5zm12 0h-2v3.8A3 3 0 0 0 19 6V5z"
    },
    link: {
      vb: "0 0 24 24",
      d: "M14 2h8v8h-2.5V6.3l-8.8 8.8-1.8-1.8L17.7 4.5H14V2zM4 4h6v2.5H6.5v11h11V14H20v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
    }
  };

  function iconFor(l) {
    var href = String(l.href || "");
    var label = String(l.l || "").toLowerCase();

    if (/github\.com/.test(href) || /github/.test(label)) return "github";
    if (/result/.test(label)) return "trophy";
    if (/itch\.io/.test(href) || /itch\.io/.test(label)) return "itch";
    if (/steampowered\.com/.test(href) || /steam/.test(label)) return "steam";
    if (/play\.google\.com/.test(href) || /google play/.test(label)) return "playstore";
    if (/apps\.apple\.com/.test(href) || /appstore|app store/.test(label)) return "appstore";
    if (/drive\.google\.com/.test(href) || /apk|download/.test(label)) return "download";
    if (/youtube\.com/.test(href) || /youtube/.test(label)) return "youtube";
    if (/ar filter|facebook ar|spark ar/.test(label)) return "filters";
    if (/wiki|article|archive|facebook\.com/.test(href + " " + label)) return "article";
    if (/website|deployed|play on browser|play in browser|^(try|use) /.test(label)) return "globe";
    return "link";
  }

  function linkButton(l) {
    var ico = ICONS[iconFor(l)];
    var rule = ico.rule ? ' fill-rule="evenodd" clip-rule="evenodd"' : "";
    var icon = '<svg viewBox="' + ico.vb + '" fill="currentColor"' + rule +
      ' aria-hidden="true"><path d="' + ico.d + '"/></svg>';
    var label = attr(l.l);

    if (l.off) {
      return '<span class="project-link is-off" data-tip="' + label + '" aria-label="' + label +
        '" role="img" tabindex="0">' + icon + "</span>";
    }
    return '<a href="' + attr(l.href) + '" class="project-link" target="_BLANK" data-tip="' + label +
      '" aria-label="' + label + '">' + icon + "</a>";
  }


  function card(p) {
    var groups = p.groups || [];

    var html = '<div class="col-md-6 col-lg-4 project-card" data-groups=" ' + attr(groups.join(" ")) +
      ' "><div class="card">' + media(p.media) + '<div class="card-body">';

    html += '<h5 class="card-title">' + p.title + "</h5>";

    if (p.badges && p.badges.length) {
      html += '<p class="card-text">' +
        p.badges.map(function (b) {
          return '<span class="badge badge-' + b.v + '">' + b.l + "</span>";
        }).join(" ") +
        "</p>";
    }

    if (p.body && p.body.length) {
      html += '<div class="card-desc">' +
        p.body.map(function (t) { return '<p class="card-text">' + t + "</p>"; }).join("") +
        "</div>";
    }

    if (p.links && p.links.length) {
      html += '<div class="project-links">' + p.links.map(linkButton).join("") + "</div>";
    }

    return html + "</div></div></div>";
  }

  var mount = document.getElementById("project-sections");
  var toolbar = document.getElementById("project-toolbar");
  if (!mount) return;

  var projects = window.PROJECTS || [];
  var categories = window.PROJECT_CATEGORIES || [];

  mount.innerHTML = '<div class="row" style="color: white;">' + projects.map(card).join("") + "</div>";

  if (!toolbar) return;

  function countIn(group) {
    return projects.filter(function (p) {
      return (p.groups || []).indexOf(group) !== -1;
    }).length;
  }

  var buttons = [{ group: "all", label: "All", count: projects.length }].concat(
    categories.map(function (c) {
      return { group: c.group, label: c.label, count: countIn(c.group) };
    }).filter(function (c) { return c.count; })
  );

  toolbar.innerHTML =
    '<div class="project-filters">' +
    buttons.map(function (b, i) {
      return '<button type="button" class="project-filter' + (i === 0 ? " is-selected" : "") +
        '" data-group="' + attr(b.group) + '" aria-pressed="' + (i === 0) + '">' +
        b.label + ' <span class="project-filter-count">' + b.count + "</span></button>";
    }).join("") +
    "</div>";

  var cards = mount.querySelectorAll(".project-card");

  function apply(active) {
    Array.prototype.forEach.call(cards, function (c) {
      var ok = active === "all" || c.dataset.groups.indexOf(" " + active + " ") !== -1;
      c.style.display = ok ? "" : "none";
    });

    window.dispatchEvent(new Event("resize"));
  }

  toolbar.addEventListener("click", function (e) {
    var btn = e.target.closest(".project-filter");
    if (!btn) return;
    Array.prototype.forEach.call(toolbar.querySelectorAll(".project-filter"), function (b) {
      var on = b === btn;
      b.classList.toggle("is-selected", on);
      b.setAttribute("aria-pressed", String(on));
    });
    apply(btn.dataset.group);
  });

  apply("all");

  function markScrollable() {
    Array.prototype.forEach.call(mount.querySelectorAll(".card-desc"), function (d) {
      d.classList.toggle("is-scrollable", d.scrollHeight > d.clientHeight + 1);
    });
  }

  markScrollable();
  window.addEventListener("resize", markScrollable);
  window.addEventListener("load", markScrollable);
})();
