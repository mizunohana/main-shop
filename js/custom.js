	//ID付与 商品ブロックのスライド化 TOPページ　オススメ商品
	if($('.top_recommend_item ul').get(0)){
		$.when(
			$('.top_recommend_item ul').attr('id', 'recommend_slider'),
			$('.top_recommend_item ul').addClass('owl-carousel')
		)
		.done(function() {
		    // すべて成功した時の処理
		    console.log('success');
				$("#recommend_slider").fadeIn(500);
				$('#recommend_slider').owlCarousel({
			    loop:true,
					autoplay:true,
					nav:true,
					dot:true,
				    items:3
				});
		})
		.fail(function() {
		    // エラーがあった時
		    console.log('error');
		});
	}


	//ID付与 商品ブロックのスライド化  排水トラップ
	if($('.tes_001 ul').get(0)){
		$.when(
			$('.tes_001 ul').attr('id', 'tes_slider'),
			$('.tes_001 ul').addClass('owl-carousel')
		)
		.done(function() {
		    // すべて成功した時の処理
		    console.log('success');
				$("#tes_slider").fadeIn(500);
				$('#tes_slider').owlCarousel({
			    loop:true,
					autoplay:true,
					nav:true,
					dot:true,
				    responsive:{
                        0: {
                            items:3
                        },
                        960: {
                            items:5,
                            //autoWidth:true
                        }
                    }
				});
		})
		.fail(function() {
		    // エラーがあった時
		    console.log('error');
		});
	}


	//ID付与 商品ブロックのスライド化  SP3個　PC5個
	//tes_001 を　機能パーツのIDに置き換え
	if($('.tes_001 ul').get(0)){
		$.when(
			//tes_slider を 書き換え　CSSのIDになる
			$('.tes_001 ul').attr('id', 'tes_slider'),
			$('.tes_001 ul').addClass('owl-carousel')
		)
		.done(function() {
		    // すべて成功した時の処理
			console.log('success');
				//　#tes_slider → 上記で設定した　cssのIDに書き換え
				$("#tes_slider").fadeIn(500);
				$('#tes_slider').owlCarousel({
			    loop:true,
					autoplay:true,
					nav:true,
					dot:true,
				    responsive:{
                        0: {
                            items:3
                        },
                        960: {
                            items:5,
                            //autoWidth:true
                        }
                    }
				});
		})
		.fail(function() {
		    // エラーがあった時
		    console.log('error');
		});
	}


	//ID付与 商品ブロックのスライド化  【Parts】カテゴリー商品一覧（手洗いボウル）
	if($('.parts-catitem-handwash ul').get(0)){
		$.when(
			$('.parts-catitem-handwash ul').attr('id', 'catitem-slider-handwash'),
			$('.parts-catitem-handwash ul').addClass('owl-carousel')
		)
		.done(function() {
		    // すべて成功した時の処理
			console.log('success');
				$("#catitem-slider-handwash").fadeIn(500);
				$('#catitem-slider-handwash').owlCarousel({
			    loop:true,
					autoplay:true,
					nav:true,
					dot:true,
				    responsive:{
                        0: {
                            items:3
                        },
                        960: {
                            items:5,
                            //autoWidth:true
                        }
                    }
				});
		})
		.fail(function() {
		    // エラーがあった時
		    console.log('error');
		});
	}

// アコーディオンメニュー

jQuery(function ($) {
	$('.js-accordion-title').on('click', function () {
	  /*クリックでコンテンツを開閉*/
	  $(this).next().slideToggle(200);
	  /*矢印の向きを変更*/
	  $(this).toggleClass('open', 200);
	});
	
	});
