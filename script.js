const imageFolder = 'chara/';
const imageData = [
    { src: 'AratakiItto.png', category: 'iwa' },
    { src: 'Albedo.png', category: 'iwa' },
    { src: 'Arlecchino.png', category: 'hi' },
    { src: 'AyakaKamisato.png', category: 'koori' },
    { src: 'KamisatoAyato.png', category: 'mizu' },
    { src: 'Alhaitham.png', category: 'kusa' },
    { src: 'amber.png', category: 'hi' },
    { src: 'Yelan.png', category: 'mizu' },
    { src: 'Venti.png', category: 'kaze' },
    { src: 'YunJin.png', category: 'iwa' },
    { src: 'Xiangling.png', category: 'hi' },
    { src: 'Emilie.png', category: 'kusa' },
    { src: 'Eula.png', category: 'koori' },
    { src: 'YanFei.png', category: 'hi' },
    { src: 'Kaveh.png', category: 'kusa' },
    { src: 'Kaeya.png', category: 'koori' },
    { src: 'KazuhaKaedehara.png', category: 'kaze' },
    { src: 'Gaming.png', category: 'hi' },
    { src: 'Ganyu.png', category: 'koori' },
    { src: 'Xianyun.png', category: 'kaze' },
    { src: 'Kinich.png', category: 'kusa' },
    { src: 'Kirara.png', category: 'kusa' },
    { src: 'Candace.png', category: 'mizu' },
    { src: 'Ningguang.png', category: 'iwa' },
    { src: 'KukiShinobu.png', category: 'kaminari' },
    { src: 'KujouSara.png', category: 'kaminari' },
    { src: 'Klee.png', category: 'hi' },
    { src: 'Clorinde.png', category: 'kaminari' },
    { src: 'Keqing.png', category: 'kaminari' },
    { src: 'Gorou.png', category: 'iwa' },
    { src: 'Collei.png', category: 'kusa' },
    { src: 'Sayu.png', category: 'kaze' },
    { src: 'Kokomi.png', category: 'mizu' },
    { src: 'Heizou.png', category: 'kaze' },
    { src: 'Sigewinne.png', category: 'mizu' },
    { src: 'Charlotte.png', category: 'koori' },
    { src: 'Chevreuse.png', category: 'hi' },
    { src: 'Xiao.png', category: 'kaze' },
    { src: 'Zhongli.png', category: 'iwa' },
    { src: 'Shenhe.png', category: 'koori' },
    { src: 'Jean.png', category: 'kaze' },
    { src: 'Xinyan.png', category: 'hi' },
    { src: 'Scaramouche.png', category: 'kaze' },
    { src: 'Sucrose.png', category: 'kaze' },
    { src: 'Sethos.png', category: 'kaminari' },
    { src: 'Cyno.png', category: 'kaminari' },
    { src: 'Tartaglia.png', category: 'mizu' },
    { src: 'Chiori.png', category: 'iwa' },
    { src: 'Chongyun.png', category: 'koori' },
    { src: 'Diona.png', category: 'koori' },
    { src: 'Dehya.png', category: 'hi' },
    { src: 'Tighnari.png', category: 'kusa' },
    { src: 'Diluc.png', category: 'hi' },
    { src: 'Thoma.png', category: 'hi' },
    { src: 'Dori.png', category: 'kaminari' },
    { src: 'Navia.png', category: 'iwa' },
    { src: 'Yoimiya.png', category: 'hi' },
    { src: 'Qiqi.png', category: 'koori' },
    { src: 'Nahida.png', category: 'kusa' },
    { src: 'Nilou.png', category: 'mizu' },
    { src: 'Neuvillette.png', category: 'mizu' },
    { src: 'Noelle.png', category: 'iwa' },
    { src: 'barbara.png', category: 'mizu' },
    { src: 'Baizhu.png', category: 'kusa' },
    { src: 'Faruzan.png', category: 'kaze' },
    { src: 'Fischl.png', category: 'kaminari' },
    { src: 'Hutao.png', category: 'hi' },
    { src: 'Furina.png', category: 'mizu' },
    { src: 'Freminet.png', category: 'koori' },
    { src: 'Bennett.png', category: 'hi' },
    { src: 'Beidou.png', category: 'kaminari' },
    { src: 'Mika.png', category: 'koori' },
    { src: 'Mualani.png', category: 'mizu' },
    { src: 'Mona.png', category: 'mizu' },
    { src: 'YaeMiko.png', category: 'kaminari' },
    { src: 'Xingqiu.png', category: 'mizu' },
    { src: 'Yaoyao.png', category: 'kusa' },
    { src: 'Raiden.png', category: 'kaminari' },
    { src: 'Wriothesley.png', category: 'koori' },
    { src: 'lisa.png', category: 'kaminari' },
    { src: 'Lyney.png', category: 'hi' },
    { src: 'Lynette.png', category: 'kaze' },
    { src: 'Layla.png', category: 'koori' },
    { src: 'Razor.png', category: 'kaminari' },
    { src: 'rosaria.png', category: 'koori' },
    { src: 'Mavuika.png', category: 'hi' },
    { src: 'Iansan.png', category: 'kaminari' },
    { src: 'Chasca.png', category: 'kaze' },
    { src: 'Kachina.png', category: 'iwa' }
];
const MAX_SELECTION = 3;
const SELECTED_LABEL = '☑';

// タブごとの選択状態を管理するためのオブジェクト
const tabSelections = {};

function loadImages() {
    const tabs = document.querySelectorAll('.tab-label');
    const tabContents = document.querySelectorAll('.tab-content');
    const cells = document.querySelectorAll('.cell');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // すでにアクティブなタブを再度クリックした場合、何もしない
            if (tab.classList.contains('active')) {
                return; 
            }
            // アクティブなタブを更新
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 現在のタブコンテンツを表示
            tabContents.forEach(content => {
                if (content.previousElementSibling === tab) {
                    updateImageList(category, content.querySelector('.image-list'));
                    restoreSelectionState(category); // 選択状態の復元
                }
            });
        });
    });

    // 初期表示（最初のタブをアクティブにする）
    tabs[0].click();

    function updateImageList(category, container) {
        container.innerHTML = '';
        const filteredImages = imageData.filter(img => img.category === category);

        filteredImages.forEach(imgData => {
            const imgContainer = document.createElement('div'); // 画像を囲むコンテナ
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = `${imageFolder}${imgData.src}`;
            img.dataset.src = imgData.src;
            img.dataset.category = imgData.category;
            img.classList.add('image-item');
            img.addEventListener('click', () => handleImageClick(img, category));

            imgContainer.appendChild(img);
            container.appendChild(imgContainer);
        });
    }

function handleImageClick(img, category) {
    const src = img.dataset.src;
    const gridContainer = document.getElementById('grid');

    // 選択解除時
    if (img.classList.contains('selected')) {
        img.classList.remove('selected');
        const existingEntry = gridContainer.querySelector(`img[data-src="${src}"]`);
        if (existingEntry) {
            existingEntry.parentElement.remove(); // 既存のセットを削除
        }
    } else {
        img.classList.add('selected');

        // 新しいセットを作成
        const entry = document.createElement('div');
        entry.className = 'entry'; // CSSクラスを適用
        
        const imgElement = document.createElement('img');
        imgElement.src = `${imageFolder}${src}`;
        imgElement.alt = src;
        imgElement.dataset.src = src;

        const nameInput = document.createElement('input');
        nameInput.type = 'text';

        const descriptionInput = document.createElement('textarea');
        
        entry.appendChild(imgElement);
        entry.appendChild(nameInput);
        entry.appendChild(descriptionInput);
        
        gridContainer.appendChild(entry);
    }
}


    function updateTabState(tabCategory) {
        // 既存の選択リストを取得
        const selectedCategory = tabSelections[tabCategory] || [];

        // 全画像の選択状態をクリア
        document.querySelectorAll('.image-grid img').forEach(img => {
            img.classList.remove('selected');
            removeNumberingAndBorder(img.parentElement);  // 全ての画像から枠と番号をクリア
        });

        // 選択されている画像を再度選択状態にする
        selectedCategory.forEach((src, index) => {
            const img = document.querySelector(`img[data-src="${src}"]`);
            if (img) {
                img.classList.add('selected');
                addNumberingAndBorder(img.parentElement, index + 1);  // 画像に番号と枠を付ける
            }
        });
    }

    function addNumberingAndBorder(container, number) {
        // 青い枠と番号を追加（コンテナに）
        container.style.border = '2px solid blue';
        let label = container.querySelector('.selected-label');
        if (!label) {
            label = document.createElement('div');
            label.className = 'selected-label';
            container.appendChild(label);
        }
        label.textContent = SELECTED_LABEL; // 定数で管理
    }

    function removeNumberingAndBorder(container) {
        // 青い枠と番号を削除
        container.style.border = 'none';
        const label = container.querySelector('.selected-label');
        if (label) label.remove();
    }

    function updateImageNumbers(tabCategory) {
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };

        const selectedCategory = tabSelections[tabCategory] || [];
        const positions = columnMapping[tabCategory] || [];

        selectedCategory.forEach((src, index) => {
            const imgContainer = document.querySelector(`.image-item[data-src="${src}"]`).parentElement;
            addNumberingAndBorder(imgContainer, index + 1);
        });
    }

    function repositionImages(tabCategory) {
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };

        const selectedCategory = tabSelections[tabCategory] || [];
        const positions = columnMapping[tabCategory] || [];

        // 上部の該当するタブの画像だけをクリア
        positions.forEach(position => {
            cells[position].innerHTML = '';
        });

        // 現在の選択画像で再配置
        selectedCategory.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = `${imageFolder}${src}`;
            img.classList.add('selected');
            const cellIndex = positions[index];
            if (cellIndex !== undefined) {
                console.log(`Placing image ${src} at position ${cellIndex}`);
                cells[cellIndex].appendChild(img);
            }
        });

        // ラベルの更新
        updateImageNumbers(tabCategory);
    }

    function restoreSelectionState(category) {
        const selectedCategory = tabSelections[category] || [];
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };
        const positions = columnMapping[category] || [];

        // 他のタブをクリアせずに、選択状態を復元
        selectedCategory.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = `${imageFolder}${src}`;
            img.classList.add('selected');
            const cellIndex = positions[index];
            if (cellIndex !== undefined) {
                cells[cellIndex].appendChild(img);
            }
        });

        // 青枠と☑の復元
        const imageContainers = document.querySelectorAll(`.tab-content .image-container .image-item[data-category="${category}"]`);
        imageContainers.forEach(img => {
            if (selectedCategory.includes(img.dataset.src)) {
                const container = img.parentElement;
                const selectedIndex = selectedCategory.indexOf(img.dataset.src);
                addNumberingAndBorder(container, selectedIndex + 1);  // ラベルと青枠を追加
            }
        });

        // ラベルの更新
        updateImageNumbers(category);
    }

    // 保存ボタンのクリックイベントを追加
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const tabCategory = document.querySelector('.tab-label.active').dataset.category;
            saveImage(tabCategory);
        });
    }
}

function saveImage() {
    html2canvas(document.getElementById('savearea'), { 
        useCORS: true, 
        scale: 2 // スケールを調整して解像度を上げる
    }).then(canvas => {
        canvas.toBlob(function(blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            
            // 現在の日時を「yyyyMMdd_HHmmss」形式にフォーマット
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const formattedDate = `${year}${month}${day}_${hours}${minutes}${seconds}`;
            link.download = `ミリしら原神_${formattedDate}.png`; // ファイル名の変更
            
            link.click();
        }, 'image/png');
    }).catch(error => {
        console.error('Error capturing image:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages();

    const sizeOptions = document.querySelectorAll('input[name="size-option"]');
    
    sizeOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            const size = event.target.value;

            // 全ての名前入力欄、説明入力欄、エントリーを取得
            const descriptionTextareas = document.querySelectorAll('textarea');
            const entries = document.querySelectorAll('.entry');

            // 全ての入力欄とエントリーのクラスをリセットして、サイズに応じたクラスを追加
            descriptionTextareas.forEach(descriptionTextarea => {
                descriptionTextarea.className = ''; // クラスリセット
                if (size === 'small') {
                    descriptionTextarea.classList.add('small');
                } else if (size === 'medium') {
                    descriptionTextarea.classList.add('medium');
                } else if (size === 'large') {
                    descriptionTextarea.classList.add('large');
                }
            });

            // エントリーのサイズも変更
            entries.forEach(entry => {
                entry.className = 'entry'; // クラスリセット
                if (size === 'small') {
                    entry.classList.add('small');
                } else if (size === 'medium') {
                    entry.classList.add('medium');
                } else if (size === 'large') {
                    entry.classList.add('large');
                }
            });

            console.log(`Size changed to: ${size}`);
        });
    });
});
