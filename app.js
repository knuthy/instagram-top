const account = 000;
const image_amount = 6; // Last 6 images
let query_id = 17888483320059182; // Must be valid - record your network boy


jQuery(document).ready(function($) {
	"use strict";

	var instagramTop = async function() {
		await $.get(`https://instagram.com/graphql/query/?query_id=${query_id}&variables={"id":"${account}","first":${image_amount},"after":null}`, function(data, status){
			data.data['user']['edge_owner_to_timeline_media']['edges'].forEach(element => {
				var appending = `<div class="col-4 gal_col insta_1"><a href="https://www.instagram.com/p/${element.node.shortcode}/" target="_blank"><div style="background-image: url('${element.node.display_url}');" alt="Image" class=""></div></a></div>`;
			  $(".insta-data").append(appending);
			});
			console.log(data);
		});
		var insta_data = $('.insta-data div').width();
		$('.insta-data div').css({'height':insta_data+'px'});
	}
	instagramTop();
  });
