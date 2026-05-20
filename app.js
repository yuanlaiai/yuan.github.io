/* =============================================
   猿来AI · 让AI很简单
   ============================================= */

// ── Data ──────────────────────────────────────

const articles = [
  {
    id: 1,
    title: 'React 18 并发特性深度解析',
    tags: ['React', '性能优化'],
    date: '2026-03-15',
    readTime: '12 分钟',
    desc: '深入探讨 React 18 的 Fiber 架构升级、Concurrent Mode、useTransition、Suspense 等并发特性，以及它们在生产环境中的实战应用。',
  },
  {
    id: 2,
    title: '从 0 到 1：构建 Node.js 微服务系统',
    tags: ['Backend', '架构'],
    date: '2026-02-28',
    readTime: '18 分钟',
    desc: '手把手搭建基于 Node.js 的微服务架构，涵盖 API Gateway、服务注册发现、链路追踪、熔断限流等核心能力。',
  },
  {
    id: 3,
    title: 'Kubernetes 实战：容器编排完全指南',
    tags: ['DevOps', 'K8s'],
    date: '2026-02-10',
    readTime: '22 分钟',
    desc: '从集群搭建到生产部署，涵盖 Pod、Deployment、Service、Ingress、HPA 自动扩缩容，以及 Helm Chart 打包最佳实践。',
  },
  {
    id: 4,
    title: '现代前端工具链对比：Webpack vs Vite vs esbuild',
    tags: ['前端工程'],
    date: '2026-01-20',
    readTime: '10 分钟',
    desc: '深度对比三大构建工具的架构差异、性能表现和适用场景，帮你在不同项目中做出最优的技术选型决策。',
  },
  {
    id: 5,
    title: '构建高性能 React 应用的 5 个技巧',
    tags: ['React', '性能优化'],
    date: '2026-03-01',
    readTime: '8 分钟',
    desc: '深入探讨代码分割、懒加载、Memo 优化、虚拟列表以及 Web Worker 在 React 应用中的实战技巧。',
  },
  {
    id: 6,
    title: 'Go 语言高并发实战：goroutine 与 channel',
    tags: ['Backend'],
    date: '2026-01-05',
    readTime: '15 分钟',
    desc: '通过实战案例掌握 Go 的并发编程模型，深入讲解 goroutine 调度器、channel 通信模式与常见并发陷阱规避。',
  },
];

const projects = [
  {
    id: 1,
    icon: '⚡',
    name: '高并发分布式缓存系统',
    desc: '基于 Go + Redis + Raft 共识算法构建的分布式缓存系统，支持百万级 QPS，具备自动故障转移和水平扩容能力。',
    stack: ['Go', 'Redis', 'Kubernetes', 'gRPC', 'Raft'],
    stars: '520+',
  },
  {
    id: 2,
    icon: '🧩',
    name: '开源 React UI 组件库',
    desc: '基于 React + TypeScript 打造的高质量 UI 组件库，完整 Storybook 文档，覆盖 60+ 组件，支持主题定制。',
    stack: ['React', 'TypeScript', 'Storybook', 'Vitest'],
    stars: '310+',
  },
  {
    id: 3,
    icon: '📊',
    name: '云原生应用监控平台',
    desc: '集成 Prometheus + Grafana + OpenTelemetry 的一站式可观测性平台，支持链路追踪、指标聚合和智能告警。',
    stack: ['React', 'Node.js', 'Prometheus', 'Docker'],
    stars: '180+',
  },
];

const langMap = {
  'Rust': 'rs', 'Python': 'py', 'TypeScript': 'ts', 'Shell': 'sh',
  'JavaScript': 'js', 'CSS': 'css', 'Jupyter Notebook': 'ipynb', 'Go': 'go',
};

// ── Render Trending Timeline ─────────────────

function renderTimeline() {
  var container = document.getElementById('trendingTimeline');
  if (!container || !window.siteData) return;

  var html = '<div class="timeline">';

  siteData.days.forEach(function(day, di) {
    var isFirst = di === 0;
    html += '<div class="day-group reveal" style="transition-delay:' + (di * 0.05) + 's">';
    html += '<div class="day-node">';
    html += '<div class="day-dot"></div>';
    html += '<span class="day-label">' + day.label + '</span>';
    html += '<span class="day-date">' + day.date + '</span>';
    html += '</div>';
    html += '<div class="day-body' + (isFirst ? '' : ' collapsed') + '">';
    html += '<div class="day-projects">';

    day.projects.forEach(function(p) {
      var langClass = langMap[p.lang] || p.lang.toLowerCase();
      var cardExtra = isFirst ? '' : ' dimmed';

      // Problems
      var problemsHtml = '<ul>';
      if (p.problems) p.problems.forEach(function(x) { problemsHtml += '<li>' + x + '</li>'; });
      problemsHtml += '</ul>';

      // Usage
      var usageHtml = '<ol>';
      if (p.usage) p.usage.forEach(function(x) { usageHtml += '<li>' + x + '</li>'; });
      usageHtml += '</ol>';

      // Insights
      var insightsHtml = '<ul>';
      if (p.insights) p.insights.forEach(function(x) { insightsHtml += '<li>' + x + '</li>'; });
      insightsHtml += '</ul>';

      html += '<div class="project-card reveal' + cardExtra + '" data-rank="' + p.rank + '" style="transition-delay:' + (di * 0.05 + 0.05) + 's">';
      html += '<div class="rank-ribbon"></div>';
      html += '<div class="pc-header">';
      html += '<span class="rank-num">#' + p.rank + '</span>';
      html += '<a href="' + p.url + '" class="repo-name" target="_blank">' + p.fullName + '</a>';
      html += '<span class="org">' + p.org + '</span>';
      html += '</div>';
      html += '<div class="pc-meta">';
      html += '<span class="lang">' + p.lang + '</span>';
      html += '<span class="stats">';
      html += '⭐ <strong>' + p.stars + '</strong>';
      html += ' · 🍴 <strong>' + p.forks + '</strong>';
      html += '</span>';
      html += '<span class="today">+ ' + p.starsToday + ' today</span>';
      html += '</div>';
      html += '<p class="pc-desc">' + p.description + '</p>';
      html += '<div class="pc-details">';
      html += '<div class="pc-section"><div class="pc-section-label problem">📌 解决什么问题</div><div class="pc-section-content">' + problemsHtml + '</div></div>';
      html += '<div class="pc-section"><div class="pc-section-label usage">🔧 如何使用</div><div class="pc-section-content">' + usageHtml + '</div></div>';
      html += '<div class="pc-section"><div class="pc-section-label insight">💡 产品价值思路</div><div class="pc-section-content">' + insightsHtml + '</div></div>';
      html += '</div>';
      html += '<div class="pc-tags">';
      p.tags.forEach(function(t) {
        html += '<span class="pc-tag">' + t + '</span>';
      });
      html += '<span class="pc-count">' + p.count + '次上榜</span>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>'; // day-projects
    html += '<div class="day-fade"></div>';
    html += '</div>'; // day-body
    if (!isFirst) {
      html += '<button class="day-toggle" onclick="toggleDay(this)"><span class="toggle-icon">▾</span> 展开查看 (' + day.label + ' ' + day.date + ')</button>';
    }
    html += '</div>'; // day-group
  });

  html += '</div>';
  html += '<div style="text-align:center;margin-top:32px">';
  html += '<a href="https://github.com/trending" class="btn-ghost" target="_blank">查看完整 GitHub Trending →</a>';
  html += '</div>';

  container.innerHTML = html;
  observeReveal();
}

// ── Render Articles ────────────────────────────

function renderArticles(filter) {
  if (typeof filter === 'undefined') filter = 'all';
  var grid = document.getElementById('articlesGrid');
  var filtered = filter === 'all'
    ? articles
    : articles.filter(function(a) { return a.tags.some(function(t) { return t === filter; }); });

  grid.innerHTML = filtered.map(function(a, i) {
    return '<div class="article-card reveal" style="transition-delay: ' + (i * 0.07) + 's">' +
      '<div class="card-meta">' +
        a.tags.map(function(t, idx) { return '<span class="card-tag' + (idx % 2 === 1 ? ' purple' : '') + '">' + t + '</span>'; }).join('') +
        '<span class="card-date">' + a.date + '</span>' +
      '</div>' +
      '<h3 class="card-title">' + a.title + '</h3>' +
      '<p class="card-desc">' + a.desc + '</p>' +
      '<div class="card-footer">' +
        '<span class="card-read-time">' + a.readTime + '</span>' +
        '<span class="card-arrow">→</span>' +
      '</div>' +
    '</div>';
  }).join('');

  observeReveal();
}

// ── Render Projects ────────────────────────────

function renderProjects() {
  var grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map(function(p, i) {
    return '<div class="project-card reveal" style="transition-delay: ' + (i * 0.1) + 's">' +
      '<div class="project-header">' +
        '<div class="project-icon">' + p.icon + '</div>' +
        '<div class="project-stars"><span class="star-icon">★</span> ' + p.stars + '</div>' +
      '</div>' +
      '<h3 class="project-name">' + p.name + '</h3>' +
      '<p class="project-desc">' + p.desc + '</p>' +
      '<div class="project-stack">' +
        p.stack.map(function(s) { return '<span class="stack-tag">' + s + '</span>'; }).join('') +
      '</div>' +
    '</div>';
  }).join('');
  observeReveal();
}

// ── Scroll Reveal ──────────────────────────────

function observeReveal() {
  var els = document.querySelectorAll('.reveal:not(.visible)');
  if (els.length === 0) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(function(el) { observer.observe(el); });
}

// ── Navbar ─────────────────────────────────────

function initNavbar() {
  var nav = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    var current = '';
    sections.forEach(function(s) {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(function(l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });

  navLinks.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Collapsible Day Toggle ────────────────────

function toggleDay(btn) {
  var dayBody = btn.parentNode.querySelector('.day-body');
  if (!dayBody) return;

  var isOpening = dayBody.classList.contains('collapsed');
  var icon = btn.querySelector('.toggle-icon');

  if (isOpening) {
    // Calculate full height
    dayBody.classList.remove('collapsed');
    dayBody.style.maxHeight = dayBody.scrollHeight + 'px';
    dayBody.style.maxHeight = dayBody.scrollHeight + 'px'; // force reflow
    icon.classList.add('open');
    btn.innerHTML = '<span class="toggle-icon open">▾</span> 收起 (' + btn.textContent.replace(/.*\(/, '(').replace(/▾/g, '').trim() + ')';
  } else {
    dayBody.classList.add('collapsed');
    dayBody.style.maxHeight = '220px';
    icon.classList.remove('open');
    btn.innerHTML = '<span class="toggle-icon">▾</span> 展开查看 (' + btn.textContent.replace(/.*\(/, '(').replace(/▾/g, '').trim() + ')';
  }
}

// ── Full-Background Particle Animation ────────

function initBgParticles() {
  var canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouse = { x: -9999, y: -9999 };

  var colors = ['#FF8C42', '#FFB347', '#00D9FF', '#A78BFA', '#FF6B35'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener('mouseleave', function() {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.4 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    };
  }

  var count = Math.min(Math.floor(canvas.width * canvas.height / 8000), 150);
  for (var i = 0; i < count; i++) {
    particles.push(createParticle());
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update & draw particles
    particles.forEach(function(p) {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      if (p.x < -15) p.x = canvas.width + 15;
      if (p.x > canvas.width + 15) p.x = -15;
      if (p.y < -15) p.y = canvas.height + 15;
      if (p.y > canvas.height + 15) p.y = -15;

      // Mouse interaction
      var dx = mouse.x - p.x;
      var dy = mouse.y - p.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 250) {
        var force = (250 - dist) / 250 * 0.015;
        p.vx += dx * force;
        p.vy += dy * force;
        var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 2) {
          p.vx = (p.vx / speed) * 2;
          p.vy = (p.vy / speed) * 2;
        }
      }

      p.vx *= 0.995;
      p.vy *= 0.995;

      var currentOpacity = p.opacity + Math.sin(p.pulse) * 0.12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0.03, Math.min(0.7, currentOpacity));
      ctx.fill();
    });

    // Connections
    particles.forEach(function(a, i) {
      particles.forEach(function(b, j) {
        if (j <= i) return;
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = '#FF8C42';
          ctx.globalAlpha = (1 - dist / 140) * 0.08;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      });
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  draw();
}

// ── Filter ─────────────────────────────────────

function initFilter() {
  var btns = document.querySelectorAll('.filter-btn');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderArticles(btn.dataset.filter);
    });
  });
}

// ── Init ───────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  initBgParticles();
  initNavbar();
  renderTimeline();
  renderArticles();
  renderProjects();
  initFilter();
  observeReveal();
});
