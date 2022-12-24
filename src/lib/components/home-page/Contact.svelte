<script lang="ts">
	export let background = '#222'; 

	let email = 'info@marmista.co';
	let phone = '+20 1050060066';
	let whatsapp = '+20 1050060088';
</script>

<sectoin class="contact section" style:background={background}>
	<h1 class="contact_title">contact us</h1>

	<form class="message_form">
		<input class="message_input" type="email" placeholder="Leave a message" />
		<button class="message_btn">send message</button>
	</form>

	<div class="contact_info">
		<div class="email info">
			<svg
				class="email_icon icon"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M55 15C55 12.25 52.75 10 50 10H10C7.25 10 5 12.25 5 15V45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15ZM50 15L30 27.5L10 15H50ZM50 45H10V20L30 32.5L50 20V45Z"
				/>
			</svg>
			<h3 class="email_text text">{email}</h3>
		</div>

		<div class="whatsapp info">
			<svg
				class="whatsapp_icon icon"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.55 26.975C20.15 34.05 25.95 39.85 33.025 43.45L38.525 37.95C39.225 37.25 40.2 37.05 41.075 37.325C43.875 38.25 46.875 38.75 50 38.75C50.663 38.75 51.2989 39.0134 51.7678 39.4822C52.2366 39.9511 52.5 40.587 52.5 41.25V50C52.5 50.663 52.2366 51.2989 51.7678 51.7678C51.2989 52.2366 50.663 52.5 50 52.5C38.7283 52.5 27.9183 48.0223 19.948 40.052C11.9777 32.0817 7.5 21.2717 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5H18.75C19.413 7.5 20.0489 7.76339 20.5178 8.23223C20.9866 8.70107 21.25 9.33696 21.25 10C21.25 13.125 21.75 16.125 22.675 18.925C22.95 19.8 22.75 20.775 22.05 21.475L16.55 26.975Z"
				/>
			</svg>
			<h3 class="whatsapp_text text">{whatsapp}</h3>
		</div>

		<div class="phone info">
			<svg
				class="phone_icon icon"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M30.1 4.9999C16.45 4.9999 5.325 16.1249 5.325 29.7749C5.325 34.1499 6.475 38.3999 8.625 42.1499L5.125 54.9999L18.25 51.5499C21.875 53.5249 25.95 54.5749 30.1 54.5749C43.75 54.5749 54.875 43.4499 54.875 29.7999C54.875 23.1749 52.3 16.9499 47.625 12.2749C45.333 9.95972 42.603 8.12407 39.5941 6.87503C36.5852 5.62599 33.3578 4.98856 30.1 4.9999M30.125 9.1749C35.625 9.1749 40.775 11.3249 44.675 15.2249C46.589 17.1383 48.1065 19.4107 49.1404 21.9118C50.1743 24.4129 50.7043 27.0935 50.7 29.7999C50.7 41.1499 41.45 50.3749 30.1 50.3749C26.4 50.3749 22.775 49.3999 19.625 47.4999L18.875 47.0749L11.075 49.1249L13.15 41.5249L12.65 40.7249C10.5849 37.4466 9.49253 33.6495 9.5 29.7749C9.525 18.4249 18.75 9.1749 30.125 9.1749M21.325 18.3249C20.925 18.3249 20.25 18.4749 19.675 19.0999C19.125 19.7249 17.5 21.2499 17.5 24.2749C17.5 27.3249 19.725 30.2499 20 30.6749C20.35 31.0999 24.4 37.3499 30.625 39.9999C32.1 40.6749 33.25 41.0499 34.15 41.3249C35.625 41.7999 36.975 41.7249 38.05 41.5749C39.25 41.3999 41.7 40.0749 42.225 38.6249C42.75 37.1749 42.75 35.9499 42.6 35.6749C42.425 35.4249 42.025 35.2749 41.4 34.9999C40.775 34.6499 37.725 33.1499 37.175 32.9499C36.6 32.7499 36.25 32.6499 35.775 33.2499C35.375 33.8749 34.175 35.2749 33.825 35.6749C33.45 36.0999 33.1 36.1499 32.5 35.8499C31.85 35.5249 29.85 34.8749 27.5 32.7749C25.65 31.1249 24.425 29.0999 24.05 28.4749C23.75 27.8749 24.025 27.4999 24.325 27.2249C24.6 26.9499 25 26.4999 25.25 26.1249C25.575 25.7749 25.675 25.4999 25.875 25.0999C26.075 24.6749 25.975 24.3249 25.825 24.0249C25.675 23.7499 24.425 20.6499 23.9 19.4249C23.4 18.2249 22.9 18.3749 22.5 18.3499C22.15 18.3499 21.75 18.3249 21.325 18.3249V18.3249Z"
				/>
			</svg>
			<h3 class="phone_text text">{phone}</h3>
		</div>
	</div>
</sectoin>

<style lang="scss">
	.contact {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 40px 24px;
		height: 100vh;
		font-weight: 500;
		width: 100vw;
		position: relative;
		top: 0;
		left: -170px;

		&_title {
			font-size: clamp(40px, 8vw, 100px);
			color: white;
			text-transform: uppercase;
			font-family: 'Playfair Display';
			letter-spacing: 4px;
		}
    &_info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

	}

	.message {
		&_form {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 80%;
			gap: 56px;
		}
		&_input {
			background-color: transparent;
			border: none;
			border-bottom: 3px var(--gray-200) solid;
			color: white;
			padding: 8px 0px 16px 16px;
			font-size: 18px;
			width: 100%;
			max-width: 600px;
		}
		&_btn {
			color: white;
			border: 2px solid var(--gray-200);
			font-size: 20px;
			padding: 16px 40px;
			text-transform: capitalize;
		}
	}

	.info {
		display: flex;
		gap: 16px;
	}
	.icon {
		fill: white;
		width: 32px;
	}
	.text {
		font-size: 32px;
		color: white;
		font-family: 'Ubuntu';
		font-weight: 500;
    font-style: italic;
    letter-spacing: 1px;
	}

	@media screen and (max-width: 1023px){
		.contact{
			left: unset;
			position: static;
			width: 100%;
		}
	
	}

	@media screen and (max-width: 767px) {
		.contact {
			// height: calc(100vh - var(--header-height));
			padding-top: calc(var(--header-height) + 40px);
		}
		.message {
			&_form {
				width: 100%;
			}
			&_input {
				width: 100%;
			}
			&_btn {
        width: 80%;
        max-width: 300px;
			}
		}

    .text{
      font-size: 24px;
    }
    .icon{
      width: 28px;
    }

	}
</style>
