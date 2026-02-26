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
        description: "暗号化、リ버스エンジニアリング、Web攻略を含むCapture The Flagチャレンジを解決しました。",
        link: "https://tryhackme.com/p/helloboy1",
        tryhackme: true
    },
    {
        id: 9,
        title: "XSS＆CSRF対策",
        category: "cybersecurity",
        description: "クロスサイトスクリプティング（XSS）およびクロスサイトリクエストフォージェリ（CSRF）攻撃に対する包括的な保護を実装しました。"
    },
    {
        id: 10,
        title: "実践演習",
        category: "practical-labs",
        description: "Cisco Packet Tracerを使用した実践的なネットワーク設計・トポロジー構築演習。Router、Switch、VLAN、STP、OSPF、EIGRP、ACL、DHCP、DNS、HTTPなどの設定と実装を通じて、実際の企業ネットワーク構築に必要な知識とスキルを習得。",
        topologies: [
            {
                name: "L3スイッチとIoTを統合した次世代ネットワーク構成",
                image: "topologies/Next-Generation Network Architecture- Integrating L3 Switching & IoT.png",
                description: "3560シリーズのL3スイッチによる高速VLAN間ルーティングに加え、最新のIoTエコシステムを融合させた高度なアーキテクチャ。ウェブカメラ、スモークディテクター、スマートカーなどのIoTデバイスがホームゲートウェイやクラウドを介して相互に接続されている。上位のISRルーターが拠点間接続をセキュアに管理し、サーバーを集約することでデータ処理の効率化と強固なセキュリティを両立。スマートオフィスや産業自動化において最も標準的かつ実用的な設計モデル。"
            },
            {
                name: "L3スイッチによる高速VLAN間ルーティング構成",
                image: "topologies/L3スイッチによる高速VLAN間ルーティング構成.png",
                description: "3560シリーズのL3スイッチを核とした、大規模組織向けの標準的なネットワークアーキテクチャ。従来のルーター集約型（Router-on-a-stick）よりも高速なハードウェア処理により、異なる部署（VLAN）間のスムーズな通信を実現。上位ルーターが拠点間接続（Site-to-Site Connectivity）を担い、サーバーを特定スイッチに集約することで、管理の効率化と強固なセキュリティを両立させた実用的な設計。"
            },
            {
                name: "Advanced L3 Inter-VLAN Routing",
                image: "topologies/Advanced L3 Inter-VLAN Routing.png",
                description: "従来の「Router-on-a-stick」構成よりも高速なデータ処理を実現した、大規模オフィスやデータセンターの標準的な設計です。3560シリーズのL3スイッチがVLAN間通信をハードウェアレベルで高速処理し、上位ルーターが拠点間接続を担います。また、サーバーを特定スイッチに集約することで、効率的なリソース管理とセキュリティを両立させています。"
            },
            {
                name: "Inter-VLAN & Site Connectivity",
                image: "topologies/Inter-VLAN & Site Connectivity.png",
                description: "マルチレイヤスイッチ (L3 Switch) とルーターを組み合わせた、現代のオフィスビルや小規模拠点における標準的なネットワーク設計。左側の構成では、2つのマルチレイヤスイッチがルーター（ISR4331）に集約されており、異なる部署（VLAN）間での効率的なデータ転送を可能にする「VLAN間ルーティング」の実装を示唆している。右側の独立したルーターとPCのセグメントは、シリアル接続やVPNを介した遠隔拠点との通信を表現しており、企業内でのセキュアな拠点間接続（Site-to-Site Connectivity）をシミュレートしている。"
            },
            {
                name: "Enterprise Three-Tier Network",
                image: "topologies/Enterprise WAN.png",
                description: "3階層階層型モデル (Three-Tier Hierarchical Model)。コア層にロードバランサーとFirewall ASA、中間的なディストリビューション層はVLAN間のルーティングを制御。スケーラビリティに優れた信頼性の高いモデル。"
            },
            {
                name: "Hybrid Star-Bus-Tree Topology",
                image: "topologies/Hybrid Star-Bus:Tree topology.png",
                description: "この構成では、左側と右側の各セクションにデバイスがスイッチ（2960-24TT）を中心に接続された「スター型トポロジー (Star Topology)」が採用されており、それらがルーター（1941 Router）を介して相互に接続されています。中央部分では、複数のルーターがシリアルリンク（赤色のギザギザ線）で結ばれた「メッシュ型トポロジー (Partial Mesh)」のような構造を持っており、さらにセルタワーを通じたワイヤレス接続も組み込まれています。要するに、複数の異なるトポロジー（スター型、ポイントツーポイント、ワイヤレス）を組み合わせて一つの大きな企業ネットワーク（WAN/LAN）を構築しているため、非常に柔軟で拡張性の高い設計になっています。"
            }
        ]
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

    // Special handling for practical-labs - show topologies
    if (category === 'practical-labs') {
        const project = filteredProjects[0];
        if (project.topologies && project.topologies.length > 0) {
            // Create topologies grid container
            const topologiesContainer = document.createElement('div');
            topologiesContainer.className = 'topologies-grid';

            // Add main project description
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.style.gridColumn = '1 / -1';
            projectItem.style.marginBottom = '30px';
            projectItem.innerHTML = `
                <div class="project-item-content">
                    <h3 class="project-item-title">${project.title}</h3>
                    <p class="project-item-description">${project.description}</p>
                </div>
            `;
            projectsContainer.appendChild(projectItem);

            // Add topologies heading
            const topologiesHeading = document.createElement('h3');
            topologiesHeading.className = 'topologies-heading';
            topologiesHeading.textContent = 'ネットワークトポロジー';
            topologiesHeading.style.gridColumn = '1 / -1';
            topologiesHeading.style.color = '#667eea';
            topologiesHeading.style.marginTop = '20px';
            topologiesHeading.style.marginBottom = '10px';
            projectsContainer.appendChild(topologiesHeading);

            // Add each topology as a card
            project.topologies.forEach((topology, index) => {
                const topologyCard = document.createElement('div');
                topologyCard.className = 'topology-card';
                topologyCard.innerHTML = `
                    <div class="topology-image" onclick="openTopologyModal('${topology.image}', '${topology.name}')">
                        <img src="${topology.image}" alt="${topology.name}">
                    </div>
                    <div class="topology-info">
                        <h4 class="topology-name">${topology.name}</h4>
                        <p class="topology-description">${topology.description}</p>
                    </div>
                `;
                projectsContainer.appendChild(topologyCard);
            });

            // Add modal HTML
            const modalHTML = `
                <div id="topology-modal" class="topology-modal" onclick="closeTopologyModal()">
                    <span class="modal-close">&times;</span>
                    <img class="modal-content" id="modal-image">
                    <div id="modal-caption"></div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            return;
        }
    }

    // Show only first 3 projects
    const displayProjects = filteredProjects.slice(0, 3);

    displayProjects.forEach((project) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        let projectContent = `
            <div class="project-item-content">
                <h3 class="project-item-title">${project.title}</h3>
                <p class="project-item-description">${project.description}</p>
            </div>
        `;

        // Show scroll button - CTF has link with TryHackMe icon
        if (project.tryhackme && project.link) {
            projectContent += `
                <a href="${project.link}" target="_blank" class="project-scroll-btn" style="text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <img src="svg/new.png" alt="TryHackMe" style="width: 16px; height: 16px; border-radius: 3px;">
                    <span class="scroll-text">TryHackMe</span>
                    <div class="scroll-arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            `;
        } else {
            projectContent += `
                <button class="project-scroll-btn">
                    <span class="scroll-text">詳細</span>
                    <div class="scroll-arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            `;
        }

        projectItem.innerHTML = projectContent;
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
        btn.addEventListener('click', function (e) {
            // Skip if it's a dropdown toggle (handled by dropdown items)
            if (this.classList.contains('dropdown-toggle')) {
                return;
            }

            // Remove active class from all buttons
            projectNavBtns.forEach(b => b.classList.remove('active'));

            // Also remove active from dropdown items
            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Render filtered projects
            const category = this.getAttribute('data-category');
            renderProjects(category);
        });
    });

    // Dropdown item click handlers
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();

            // Remove active class from all dropdown items
            dropdownItems.forEach(i => i.classList.remove('active'));

            // Add active class to clicked dropdown item
            this.classList.add('active');

            // Get category and render projects
            const category = this.getAttribute('data-category');
            renderProjects(category);
        });
    });

    // Keep dropdown toggle active when hovering (desktop only)
    const dropdownContainer = document.querySelector('.dropdown-container');
    if (dropdownContainer) {
        dropdownContainer.addEventListener('mouseenter', function () {
            document.querySelector('.dropdown-toggle').classList.add('hover-active');
        });
        dropdownContainer.addEventListener('mouseleave', function () {
            document.querySelector('.dropdown-toggle').classList.remove('hover-active');
        });

        // Mobile click handler for dropdown toggle
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function (e) {
                // Prevent any default behavior
                e.preventDefault();
                e.stopPropagation();

                // Toggle the dropdown on mobile
                if (window.innerWidth <= 768 || window.innerWidth > 768) {
                    // Toggle dropdown visibility
                    const container = this.closest('.dropdown-container');
                    container.classList.toggle('active');
                }
                return false;
            });
        }

        // Close dropdown when clicking outside on mobile
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.dropdown-container')) {
                document.querySelectorAll('.dropdown-container.active').forEach(dc => {
                    dc.classList.remove('active');
                });
            }
        });
    }

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

// Modal functions for topology images
function openTopologyModal(imageSrc, caption) {
    const modal = document.getElementById('topology-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
        if (modalCaption) {
            modalCaption.innerHTML = caption;
        }
    }
}

function closeTopologyModal() {
    const modal = document.getElementById('topology-modal');
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeTopologyModal();
    }
});

// Mobile Menu Toggle for projects.html
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

function openMobileMenu() {
    if (menuToggle && sidebar) {
        menuToggle.classList.add('active');
        sidebar.classList.add('active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    if (menuToggle && sidebar) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Close mobile menu when clicking on overlay
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
        closeMobileMenu();
    }
});

// Close mobile menu when navigating to another page
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

