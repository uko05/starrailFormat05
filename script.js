const imageFolder = 'chara/';
const imageData = [
    { src: 'unri.png', category: 'butsuri' },
    { src: 'boothill.png', category: 'butsuri' },
    { src: 'robin.png', category: 'butsuri' },
    { src: 'arujen.png', category: 'butsuri' },
    { src: 'kana.png', category: 'butsuri' },
    { src: 'ruka.png', category: 'butsuri' },
    { src: 'susyo.png', category: 'butsuri' },
    { src: 'kurara.png', category: 'butsuri' },
    { src: 'natasya.png', category: 'butsuri' },
    { src: 'syu1.png', category: 'butsuri' },
    { src: 'sei1.png', category: 'butsuri' },
    { src: 'reisa.png', category: 'hi' },
    { src: 'syokyu.png', category: 'hi' },
    { src: 'hotaru.png', category: 'hi' },
    { src: 'topazu.png', category: 'hi' },
    { src: 'gyaraga.png', category: 'hi' },
    { src: 'ketya.png', category: 'hi' },
    { src: 'hukku.png', category: 'hi' },
    { src: 'aster.png', category: 'hi' },
    { src: 'himeko.png', category: 'hi' },   
    { src: 'syu2.png', category: 'hi' },    
    { src: 'sei2.png', category: 'hi' },    
    { src: 'ruanmama.png', category: 'koori' },
    { src: 'misia.png', category: 'koori' },
    { src: 'genkyo.png', category: 'koori' },
    { src: 'keiryu.png', category: 'koori' },
    { src: 'pera.png', category: 'koori' },
    { src: 'jepado.png', category: 'koori' },
    { src: 'helta.png', category: 'koori' },
    { src: 'nanoka.png', category: 'koori' },    
    { src: 'hisyo.png', category: 'kaze' },
    { src: 'swan.png', category: 'kaze' },
    { src: 'fofo.png', category: 'kaze' },
    { src: 'jin.png', category: 'kaze' },
    { src: 'sanpo.png', category: 'kaze' },
    { src: 'buronya.png', category: 'kaze' },
    { src: 'tankou.png', category: 'kaze' },    
    { src: 'yomi.png', category: 'kaminari' },
    { src: 'kahuka.png', category: 'kaminari' },
    { src: 'keigen.png', category: 'kaminari' },
    { src: 'moze.png', category: 'kaminari' },
    { src: 'byakuro.png', category: 'kaminari' },
    { src: 'teiun.png', category: 'kaminari' },
    { src: 'sebaru.png', category: 'kaminari' },
    { src: 'aran.png', category: 'kaminari' },
    { src: 'ranpa.png', category: 'kyosuu' },
    { src: 'aben.png', category: 'kyosuu' },
    { src: 'reisio.png', category: 'kyosuu' },
    { src: 'nanoka2.png', category: 'kyosuu' },
    { src: 'velto.png', category: 'kyosuu' },
    { src: 'ingetsu.png', category: 'kyosuu' },
    { src: 'gyoku.png', category: 'kyosuu' },
    { src: 'rasetu.png', category: 'kyosuu' },
    { src: 'syu3.png', category: 'kyosuu' },
    { src: 'sei3.png', category: 'kyosuu' },
    { src: 'jeido.png', category: 'ryoushi' },
    { src: 'hanabi.png', category: 'ryoushi' },
    { src: 'hugen.png', category: 'ryoushi' },
    { src: 'ginro.png', category: 'ryoushi' },
    { src: 'zere.png', category: 'ryoushi' },
    { src: 'setui.png', category: 'ryoushi' },
    { src: 'rinkusu.png', category: 'ryoushi' },
    { src: 'seijaku.png', category: 'ryoushi' }
];

const SELECTED_LABEL = '☑';

//------------------------------------------------------------------------------------------------
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');
const parentNode = document.querySelector('.parent-node');
const childNodes = document.querySelector('.child-nodes');

// 初期状態でサイドバーを隠す
sidebar.classList.add('hidden');
toggleButton.setAttribute('aria-expanded', false);
toggleButton.setAttribute('aria-label', 'メニューを開く');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // hiddenクラスを切り替え
    const isExpanded = !sidebar.classList.contains('hidden');
    toggleButton.setAttribute('aria-expanded', isExpanded);
    toggleButton.setAttribute('aria-label', isExpanded ? 'メニューを閉じる' : 'メニューを開く');
});

parentNode.addEventListener('click', (event) => {
    event.preventDefault(); // デフォルトのリンク動作を防止
    childNodes.classList.toggle('active'); // 子ノードの表示・非表示を切り替え
    const isActive = childNodes.classList.contains('active');
    parentNode.textContent = `${isActive ? '▼' : '▶'} 推しキャラランキング`; // テキストを更新
});
//------------------------------------------------------------------------------------------------

// タブごとの選択状態を管理するためのオブジェクト
const tabSelections = {};

// タブの選択状態を表示
function updateTabSelectionsDisplay() {
    const tabSelectionsElement = document.getElementById('tab-selections');
    tabSelectionsElement.innerHTML = ''; // クリアしてから再描画

    // tabSelectionsが空でも問題ないように対策
    if (tabSelections && Object.keys(tabSelections).length > 0) {
        for (const [category, selections] of Object.entries(tabSelections)) {
            const categoryInfo = document.createElement('div');
            categoryInfo.textContent = `${category}: ${selections.join(', ')}`;
            tabSelectionsElement.appendChild(categoryInfo);
        }
    } else {
        tabSelectionsElement.textContent = 'No selections made yet.';
    }
}

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
    const saveArea = document.getElementById('imagearea'); // 保存エリアを取得
    const tabCategory = document.querySelector('.tab-label.active').dataset.category;

    // 選択状態を取得
    let selectedCategory = tabSelections[tabCategory] || [];

    // 選択済みかどうかを判定
    const isSelected = selectedCategory.includes(src);

    // 選択解除時
    if (isSelected) {
        img.classList.remove('selected');
        removeNumberingAndBorder(img.parentElement);  // コンテナから番号と枠を削除

        const existingEntry = gridContainer.querySelector(`img[data-src="${src}"]`);
        if (existingEntry) {
            existingEntry.parentElement.remove(); // 既存のセットを削除
        }

        // 保存エリアからも削除
        const existingSaveEntry = saveArea.querySelector(`img[data-src="${src}"]`);
        if (existingSaveEntry) {
            existingSaveEntry.parentElement.remove(); // 保存エリアの既存のセットを削除
        }

        // 選択リストから画像を削除
        selectedCategory = selectedCategory.filter(item => item !== src);
    } else {
        // 選択時
        img.classList.add('selected');
        selectedCategory.push(src);  // 選択リストに画像を追加
        addNumberingAndBorder(img.parentElement, selectedCategory.length);  // コンテナに番号と枠を追加

        // 新しいセットを作成
        const entry = document.createElement('div');
        entry.className = 'entry'; // CSSクラスを適用

        const imgElement = document.createElement('img');
        imgElement.src = `${imageFolder}${src}`;
        imgElement.alt = src;
        imgElement.dataset.src = src;

        const nameInput = document.createElement('input');
        nameInput.type = 'text';

        nameInput.addEventListener('blur', () => {
            // フォーカスが外れたときに保存エリアに転記
            const saveNameLabel = saveArea.querySelector(`.lbl_name[data-src="${src}"]`);
            if (saveNameLabel) {
                saveNameLabel.textContent = nameInput.value; // 入力内容を転記
                saveNameLabel.style.height = '25px'; // 高さをリセット
            }
        });

        const descriptionInput = document.createElement('textarea');

        descriptionInput.addEventListener('blur', () => {
            // フォーカスが外れたときに保存エリアに転記
            const saveDescriptionLabel = saveArea.querySelector(`.lbl_area[data-src="${src}"]`);
            if (saveDescriptionLabel) {
                saveDescriptionLabel.textContent = descriptionInput.value; // 入力内容を転記
            }
        });

        entry.appendChild(imgElement);
        entry.appendChild(nameInput);
        entry.appendChild(descriptionInput);

        gridContainer.appendChild(entry);

        // 保存エリアにも同じものを作成
        const saveEntry = document.createElement('div');
        saveEntry.className = 'entry'; // CSSクラスを適用

        const saveImgElement = document.createElement('img');
        saveImgElement.src = `${imageFolder}${src}`;
        saveImgElement.alt = src;
        saveImgElement.dataset.src = src;

        // 名前と説明のラベルを作成
        const saveNameLabel = document.createElement('label');
        saveNameLabel.textContent = ' '; // 初期値を設定（ここでは空）
        saveNameLabel.className = 'lbl_name'; // CSSクラスを適用
        saveNameLabel.dataset.src = src; // 画像のsrcをデータ属性として追加

        const saveDescriptionLabel = document.createElement('label');
        saveDescriptionLabel.textContent = ' '; // 初期値を設定（ここでは空）
        saveDescriptionLabel.className = 'lbl_area'; // CSSクラスを適用
        saveDescriptionLabel.dataset.src = src; // 画像のsrcをデータ属性として追加

        saveEntry.appendChild(saveImgElement);
        saveEntry.appendChild(saveNameLabel);
        saveEntry.appendChild(saveDescriptionLabel);

        saveArea.appendChild(saveEntry);
        
        // 最初のラベル更新を行う
        saveNameLabel.textContent = nameInput.value; // 入力内容を転記
        saveDescriptionLabel.textContent = descriptionInput.value; // 入力内容を転記
    }

    // 更新された選択リストをtabSelectionsに保存
    tabSelections[tabCategory] = selectedCategory;

    // 表示を更新
    updateImageNumbers(tabCategory);  // 番号の更新も行う
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
        tabSelections[tabCategory] = selectedCategory; // 選択状態を更新
        //updateTabSelectionsDisplay();
    }
    
    function addNumberingAndBorder(container, number) {
        // 青い枠と番号を追加（コンテナに）
        container.style.outline = '2px solid blue'; // 枠の代わりにアウトラインを追加
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
        container.style.outline = 'none'; // アウトラインをリセット
        const label = container.querySelector('.selected-label');
        if (label) label.remove();
    }

    function updateImageNumbers(tabCategory) {

        const selectedCategory = tabSelections[tabCategory] || [];

        selectedCategory.forEach((src, index) => {
            const imgContainer = document.querySelector(`.image-item[data-src="${src}"]`).parentElement;
            addNumberingAndBorder(imgContainer, index + 1);
        });
        tabSelections[tabCategory] = selectedCategory; // 選択状態を更新
        //updateTabSelectionsDisplay();
    }

    function restoreSelectionState(category) {
        const selectedCategory = tabSelections[category] || [];

        // 青枠と☑の復元
        const imageContainers = document.querySelectorAll(`.tab-content .image-container .image-item[data-category="${category}"]`);
        imageContainers.forEach(img => {
            if (selectedCategory.includes(img.dataset.src)) {
                const container = img.parentElement;
                const selectedIndex = selectedCategory.indexOf(img.dataset.src);
                addNumberingAndBorder(container, selectedIndex + 1);  // ラベルと青枠を追加
            }
        });

        //tabSelections[tabCategory] = selectedCategory; // 選択状態を更新
        //updateTabSelectionsDisplay();
        
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

    // imageareaを一時的に表示
    const imageArea = document.getElementById('imagearea');
    imageArea.style.display = 'grid'; // 表示

    html2canvas(document.getElementById('imagearea'), { 
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
            link.download = `スタレフリーフォーマット_${formattedDate}.png`; // ファイル名の変更
            
            link.click();
        }, 'image/png');
    }).catch(error => {
        console.error('Error capturing image:', error);
    });
    // キャプチャが完了したらimageareaを非表示に戻す
    imageArea.style.display = 'none'; 
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages();

    const sizeOptions = document.querySelectorAll('input[name="size-option"]');
    
    sizeOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            const size = event.target.value;

            // 全ての名前入力欄、説明入力欄、エントリーを取得
            const descriptionTextareas = document.querySelectorAll('textarea');
            const descriptionLabelareas = document.querySelectorAll('.lbl_area'); // ピリオドを追加
            const entries = document.querySelectorAll('.entry');

            // 全ての入力欄とエントリーのクラスをリセットして、サイズに応じたクラスを追加
            descriptionTextareas.forEach(descriptionTextarea => {
                descriptionTextarea.className = ''; // クラスリセット
                descriptionTextarea.classList.add(size); // サイズクラスを追加
            });

            descriptionLabelareas.forEach(descriptionLabel => {
                descriptionLabel.className = 'lbl_area'; // 基本クラスを設定
                descriptionLabel.classList.add(size); // サイズクラスを追加
            });

            // エントリーのサイズも変更
            entries.forEach(entry => {
                entry.className = 'entry'; // 基本クラスをリセット
                entry.classList.add(size); // サイズクラスを追加
            });

            console.log(`Size changed to: ${size}`);
        });
    });
});
