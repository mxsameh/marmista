<script lang="ts">
	import HorizontalGal from "./HorizontalGal.svelte";

</script>

<HorizontalGal/>

<div class="info">
	<h3 class="info_title">finest quality marble</h3>
	<p class="info_text">High quality Turkish, Italian and Spanish marble</p>
	<a class="info_products_link" href="/products">
		<span class="text">view all products</span>
		<svg
			class="icon"
			viewBox="0 0 47 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_113_24)">
				<path
					d="M11.5781 37.6368L35.2705 9.52463"
					stroke="#333333"
					stroke-width="3"
					stroke-miterlimit="10"
				/>
				<path
					d="M16.6519 9.37172C26.7185 13.7841 35.2698 9.52408 35.2698 9.52408C35.2698 9.52408 32.5208 18.6742 38.5747 27.8478"
					stroke="#333333"
					stroke-width="3"
					stroke-linejoin="bevel"
				/>
			</g>
			<defs>
				<clipPath id="clip0_113_24">
					<rect
						width="37"
						height="29"
						fill="white"
						transform="translate(0.490479 28.2923) rotate(-49.8765)"
					/>
				</clipPath>
			</defs>
		</svg>
	</a>
</div>

<style lang="scss">
	.info {
		margin-top: auto;
		display: flex;
		align-items: center;
		flex-direction: column;

		&_title {
			text-transform: uppercase;
			font-size: 32px;
			color: var(--gray-700);
			text-align: center;
		}
		&_text {
			margin-top: 24px;
			color: var(--gray-500);
			font-size: 24px;
			text-align: center;
		}
		&_products_link {
			margin-top: 80px;
			display: flex;
			align-items: flex-end;
			gap: 8px;
			&:hover .text {
				color: black;
			}
			&:hover .icon {
				transform: translate(10px, -10px);
			}
			.text {
				font-size: 28px;
				text-transform: uppercase;
				font-family: 'Playfair Display';
				color: var(--gray-700);
			}
			.icon{
				width: 40px;
			}
		}
	}

	@media screen and (max-width: 767px) {
		.info{
			margin: 40px 0 0;
			padding: 0 20px;
			&_title{
				font-size: 28px;
			}
			&_text{
				margin-top: 16px;
				font-size: 16px;
			}
			&_products_link{
				margin-top: 56px;
				.text{
					font-size: 24px;
				}
				.icon{
					width: 36px;
				}
			}
		}
	}
</style>
