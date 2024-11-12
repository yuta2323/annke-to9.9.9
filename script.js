document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();  // フォームのデフォルト送信を防ぐ

    const selectedOption = document.querySelector('input[name="satisfaction"]:checked');

    if (!selectedOption) {
        alert('回答を選択してください。');
        return;
    }

    const value = selectedOption.value;

    if (value === "非常に満足" || value === "満足") {
        // Googleマップの口コミ投稿ページへリダイレクト
        window.location.href = "https://g.page/r/CcwSNU3G9-lMEAE/review"; // ここにGoogleレビューのURLを入力
    } else {
        // 意見収集ページへリダイレクト
        window.location.href = "http://127.0.0.1:5500/feedback-form.html"; // ここに意見収集ページのURLを入力
    }
});
