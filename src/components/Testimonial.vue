<template>
  <div class="testimonial">
     <div class="container">
	<div class="row">
		<div class="col-sm-12">
			<h2>Testimonials</h2>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<!-- Carousel indicators -->
	<!-- <ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
		<li data-target="#myCarousel" data-slide-to="3"></li>
		<li data-target="#myCarousel" data-slide-to="4"></li>
	</ol>    -->
	<!-- Wrapper for carousel items -->
	<div class="carousel-inner">		
		<div class="item carousel-item active">
			<div class="img-box"><img src="../assets/images/user2.jpg" alt=""></div>
			<p class="testimonial">Wawo, i just got my parcel. I'm so glad for the communication till this point. Thank you so much..</p>
			<p class="overview"><b>MICHEAL, CARRICK</b></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
				</ul>
			</div>
		</div>
		<div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/user.jpg" alt=""></div>
			<p class="testimonial">If you want your parcels delivered on time, then you are in the right place.</p>
			<p class="overview"><b> HILLARY SMITH</b></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
				</ul>
			</div>
		</div>
		<div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/user3.jpg" alt=""></div>
			<p class="testimonial">Very efficient and affordable delivery service provider.</p>
			<p class="overview"><b>MONICA LISA</b></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
				</ul>
			</div>
		</div>	
		<div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/user4.jpg" alt=""></div>
			<p class="testimonial">Will recommend their services to anyone anyday.</p>
			<p class="overview"><b>BILL LORIS</b></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					</ul>
			</div>
		</div>	
		<div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/user5.jpg" alt=""></div>
			<p class="testimonial">They handled my fragile package with care till it got to me here in Brazil and i'm so glad to choose them.</p>
			<p class="overview"><b>SARAH FATIMA</b></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
				</ul>
			</div>
		</div>		
		<div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/user6.jpg" alt=""></div>
			<p class="testimonial">Powering my business logistics needs has taken my business to a whole new level</p>
			<p class="overview"><b>SERENA BLISS</b></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
				</ul>
			</div>
		</div>		
	</div>
	<!-- Carousel controls -->
	<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i class="fa fa-angle-left"></i>
	</a>
	<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
		<i class="fa fa-angle-right"></i>
	</a>
</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.testimonial{
	padding-top: 4rem;
	// padding-bottom: 2rem;
	background: url('../assets/images/map.png');
	background-position: center;
	background-size: cover;
  h2 {
	color: #05103B;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	position: relative;
	margin: 25px 0 50px;
	font-size: 2.5rem;
}
h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 7px;
	background: #FF5E14;
	left: 0;
	right: 0;
	bottom: -10px;
}
.carousel {
	max-width: 850px;
	margin: 0 auto;
	padding-bottom: 50px;
}
.carousel .item {
	color: #999;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
    min-height: 340px;
}
.carousel .item a {
	color: #eb7245;
}
.carousel .img-box {
	width: 145px;
	height: 145px;
	margin: 0 auto;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {	
	padding: 30px 0 10px;
}
.carousel .overview {	
	text-align: center;
	padding-bottom: 5px;
}
.carousel .overview b {
	color: #333;
	font-size: 15px;
	text-transform: uppercase;
	display: block;	
	padding-bottom: 5px;
}
.carousel .star-rating i {
	font-size: 18px;
	color: #ffdc12;
}
.carousel .carousel-control {
	width: 30px;
	height: 30px;
	border-radius: 50%;
    background: #999;
    text-shadow: none;
	top: 4px;
}
.carousel-control i {
	font-size: 20px;
	margin-right: 2px;
}
.carousel-control.left {
	left: auto;
	right: 40px;
}
.carousel-control.right i {
	margin-right: -2px;
}
.carousel .carousel-indicators {
	bottom: 15px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 11px;
	height: 11px;
	margin: 1px 5px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #e2e2e2;
	border-color: transparent;
}
.carousel-indicators li.active {
	border: none;
	background: #888;		
}
}
</style>