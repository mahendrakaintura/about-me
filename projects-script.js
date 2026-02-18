// Project data
const projectsData = [
    {
        id: 1,
        title: "Linuxサーバーセットアップ",
        category: "system",
        description: "適切なセキュリティ設定、ユーザー管理、システム最適化を備えたLinuxサーバーを構成・デプロイしました。"
    },
    {
        id: 2,
        title: "ネットワーク監視システム",
        category: "system",
        description: "システムパフォーマンス、CPU使用率、メモリ割り当て、ディスク領域を追跡する包括的なネットワーク監視システムを構築しました。"
    },
    {
        id: 3,
        title: "LAN/WANネットワーク設計",
        category: "networking",
        description: "適切なサブネッティング、ルーティング、VXLANプロトコルを備えた複雑なLAN/WANネットワークアーキテクチャを設計・実装しました。"
    },
    {
        id: 4,
        title: "Wi-Fiセキュリティの実装",
        category: "networking",
        description: "WPA2/WPA3暗号化、MACフィルタリング、アクセス制御リストを備えたセキュアなWi-Fiネットワークを実装しました。"
    },
    {
        id: 5,
        title: "VPN設定",
        category: "networking",
        description: "IPsecおよびOpenVPNプロトコルを使用した安全なリモートアクセスのためのVPN接続をセットアップ・構成しました。"
    },
    {
        id: 6,
        title: "ペネトレーションテストレポート",
        category: "cybersecurity",
        description: "Webアプリケーションの包括的なペネトレーションテストを実施し、脆弱性を特定し、修復戦略を提供しました。"
    },
    {
        id: 7,
        title: "SQLインジェクション対策",
        category: "cybersecurity",
        description: "Laravelアプリケーションでパラメータ化クエリとORMを使用したSQLインジェクション攻撃の防止措置を実装しました。"
    },
    {
        id: 8,
        title: "CTFチャレンジソリューション",
        category: "cybersecurity",
        description: "暗号化、リバースエンジニアリング、Web攻略を含むCapture The Flagチャレンジを解決しました。"
    },
    {
        id: 9,
        title: "XSS＆CSRF対策",
        category: "cybersecurity",
        description: "クロスサイトスクリプティング（XSS）およびクロスサイトリクエストフォージェリ（CSRF）攻撃に対する包括的な保護を実装しました。"
    }
];

// Function to render projects
function renderProjects(category) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';

    const filteredProjects = projectsData.filter(project => project.category === category);

    if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = '<div class="no-projects"><p>このカテゴリーにはプロジェクトが見つかりません。</p></div>';
        return;
    }

    // Show only first 3 projects
    const displayProjects = filteredProjects.slice(0, 3);

    displayProjects.forEach((project) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <div class="project-item-content">
                <h3 class="project-item-title">${project.title}</h3>
                <p class="project-item-description">${project.description}</p>
            </div>
            <button class="project-scroll-btn">
                <span class="scroll-text">詳細</span>
                <div class="scroll-arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        `;
        projectsContainer.appendChild(projectItem);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Initial render - show system projects by default
    renderProjects('system');

    // Set the "システム" button as active
    document.querySelector('[data-category="system"]').classList.add('active');

    // Project category button click handlers
    const projectNavBtns = document.querySelectorAll('.project-nav-btn');
    projectNavBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            projectNavBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Render filtered projects
            const category = this.getAttribute('data-category');
            renderProjects(category);
        });
    });

    // Sidebar navigation for projects.html
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                // Allow default navigation for real links
                return;
            }
            e.preventDefault();
        });
    });
});
