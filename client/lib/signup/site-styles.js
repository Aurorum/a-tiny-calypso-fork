/** @format **/

/**
 * External dependencies
 */
import React from 'react';
import i18n from 'i18n-calypso';
import { get } from 'lodash';

// For now the site style step will determine which 'style pack' to use on pub/radcliffe-2
export const siteStyleOptions = {
	business: [
		{
			description: i18n.translate( 'A gutenberg-ready business variation.', {
				comment: 'A description of a WordPress theme style.',
			} ),
			id: 'modern',
			label: 'Modern',
			theme: 'pub/modern-business',
			fontUrl: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,500,700',
			buttonSvg: (
				<svg width="62" height="32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd">
						<path
							d="M9.805 26v-8.244h-.054l-.918 1.836-2.448 4.446-2.394-4.428-.954-1.98h-.054V26H.409V13.436h2.898l3.078 5.886h.036l3.042-5.886h2.916V26H9.805zm9.036.216c-2.772 0-4.428-1.908-4.428-4.95 0-3.042 1.656-4.932 4.428-4.932 2.772 0 4.428 1.89 4.428 4.932 0 3.042-1.656 4.95-4.428 4.95zm0-2.106c1.044 0 1.656-.684 1.656-1.872v-1.926c0-1.188-.612-1.872-1.656-1.872s-1.656.684-1.656 1.872v1.926c0 1.188.612 1.872 1.656 1.872zM30.955 26v-1.584h-.09c-.27 1.026-1.314 1.8-2.538 1.8-2.394 0-3.636-1.746-3.636-4.95s1.242-4.932 3.636-4.932c1.224 0 2.268.756 2.538 1.8h.09V12.68h2.664V26h-2.664zm-1.746-1.944c1.008 0 1.746-.522 1.746-1.386v-2.79c0-.864-.738-1.386-1.746-1.386s-1.746.774-1.746 1.962v1.638c0 1.188.738 1.962 1.746 1.962zm10.836 2.16c-2.898 0-4.536-1.926-4.536-4.95 0-2.988 1.584-4.932 4.428-4.932 3.132 0 4.392 2.268 4.392 4.824v.792h-6.066v.144c0 1.242.666 2.034 2.088 2.034 1.116 0 1.728-.522 2.322-1.134l1.332 1.656c-.846.972-2.232 1.566-3.96 1.566zm-.054-7.92c-1.062 0-1.728.774-1.728 1.944v.144h3.312v-.162c0-1.152-.522-1.926-1.584-1.926zM48.883 26h-2.664v-9.45h2.664v2.052h.09c.216-1.044.936-2.052 2.412-2.052h.468v2.484h-.666c-1.548 0-2.304.342-2.304 1.44V26zm7.272 0h-2.664v-9.45h2.664v1.602h.108c.342-.99 1.134-1.818 2.628-1.818 1.926 0 2.952 1.368 2.952 3.744V26h-2.664v-5.706c0-1.206-.342-1.8-1.314-1.8-.864 0-1.71.45-1.71 1.386V26z"
							fill="#181818"
						/>
						<path fill="#080808" d="M7 7h47v3H7z" />
					</g>
				</svg>
			),
		},
		{
			description: i18n.translate( 'A gutenberg-ready business variation.', {
				comment: 'A description of a WordPress theme style.',
			} ),
			id: 'sophisticated',
			label: 'Sophisticated',
			theme: 'pub/sophisticated-business',
			fontUrl: 'https://fonts.googleapis.com/css?family=Poppins:400,600,700',
			buttonSvg: (
				<svg width="93" height="32" xmlns="http://www.w3.org/2000/svg">
					<g fill="#FFF" fillRule="evenodd">
						<g transform="translate(33 21)">
							<rect width="6" height="6" rx="3" />
							<rect x="10" width="6" height="6" rx="3" />
							<rect x="20" width="6" height="6" rx="3" />
						</g>
						<path d="M7.5 14.283c0 1.534-1.196 2.808-3.328 2.808-1.963 0-3.497-.975-3.562-2.821h2.366c.065.702.507 1.04 1.131 1.04.65 0 1.066-.325 1.066-.858 0-1.69-4.563-.78-4.537-4.017 0-1.729 1.417-2.691 3.328-2.691 1.989 0 3.328.988 3.419 2.73H4.978c-.039-.585-.455-.936-1.053-.949-.533-.013-.936.26-.936.832 0 1.586 4.511.871 4.511 3.926zm8.463-.91c0 2.301-1.664 3.731-3.796 3.731-2.132 0-3.744-1.43-3.744-3.731s1.651-3.731 3.77-3.731c2.132 0 3.77 1.43 3.77 3.731zm-5.278 0c0 1.222.676 1.807 1.482 1.807.793 0 1.534-.585 1.534-1.807 0-1.235-.728-1.807-1.508-1.807-.806 0-1.508.572-1.508 1.807zm8.684-2.6c.403-.637 1.17-1.131 2.236-1.131 1.781 0 3.198 1.43 3.198 3.718 0 2.288-1.417 3.744-3.198 3.744-1.066 0-1.833-.507-2.236-1.118v4.472h-2.223V9.746h2.223v1.027zm3.172 2.587c0-1.157-.754-1.781-1.599-1.781-.832 0-1.586.637-1.586 1.794s.754 1.794 1.586 1.794c.845 0 1.599-.65 1.599-1.807zM25.973 17V7.38h2.223v3.341c.442-.624 1.235-1.053 2.236-1.053 1.651 0 2.756 1.144 2.756 3.094V17h-2.21v-3.939c0-.988-.546-1.534-1.391-1.534s-1.391.546-1.391 1.534V17h-2.223zm8.762 0V9.746h2.223V17h-2.223zm1.118-8.008c-.793 0-1.326-.533-1.326-1.196 0-.676.533-1.209 1.326-1.209.78 0 1.313.533 1.313 1.209 0 .663-.533 1.196-1.313 1.196zm8.606 5.902c0 1.261-1.118 2.21-2.938 2.21-1.937 0-3.237-1.079-3.341-2.483h2.197c.052.507.507.845 1.118.845.572 0 .871-.26.871-.585 0-1.17-3.952-.325-3.952-2.99 0-1.235 1.053-2.249 2.951-2.249 1.872 0 2.912 1.04 3.055 2.47h-2.054c-.065-.494-.442-.819-1.066-.819-.52 0-.806.208-.806.559 0 1.157 3.926.338 3.965 3.042zm1.716-.416v-2.886h-.884V9.746h.884V7.978h2.223v1.768h1.456v1.846h-1.456v2.912c0 .429.182.611.676.611h.793V17h-1.131c-1.508 0-2.561-.637-2.561-2.522zM51.102 17V9.746h2.223V17h-2.223zm1.118-8.008c-.793 0-1.326-.533-1.326-1.196 0-.676.533-1.209 1.326-1.209.78 0 1.313.533 1.313 1.209 0 .663-.533 1.196-1.313 1.196zm2.275 4.381c0-2.288 1.508-3.731 3.64-3.731 1.82 0 3.107 1.001 3.484 2.73h-2.366c-.182-.507-.546-.832-1.157-.832-.793 0-1.339.624-1.339 1.833s.546 1.833 1.339 1.833c.611 0 .962-.299 1.157-.832h2.366c-.377 1.677-1.664 2.73-3.484 2.73-2.132 0-3.64-1.43-3.64-3.731zm7.865-.013c0-2.288 1.417-3.718 3.198-3.718 1.079 0 1.846.494 2.236 1.131V9.746h2.223V17h-2.223v-1.027c-.403.637-1.17 1.131-2.249 1.131-1.768 0-3.185-1.456-3.185-3.744zm5.434.013c0-1.157-.741-1.794-1.586-1.794-.832 0-1.586.624-1.586 1.781s.754 1.807 1.586 1.807c.845 0 1.586-.637 1.586-1.794zm4.186 1.105v-2.886h-.884V9.746h.884V7.978h2.223v1.768h1.456v1.846h-1.456v2.912c0 .429.182.611.676.611h.793V17h-1.131c-1.508 0-2.561-.637-2.561-2.522zm8.125-3.055c-.728 0-1.287.442-1.417 1.248h2.782c0-.793-.624-1.248-1.365-1.248zm3.471 3.172c-.351 1.417-1.638 2.509-3.445 2.509-2.132 0-3.666-1.43-3.666-3.731s1.508-3.731 3.666-3.731c2.119 0 3.614 1.404 3.614 3.614 0 .208-.013.429-.039.65h-5.031c.078.949.663 1.391 1.378 1.391.624 0 .975-.312 1.157-.702h2.366zm.897-1.235c0-2.288 1.417-3.718 3.198-3.718.962 0 1.794.442 2.236 1.105V7.38h2.223V17h-2.223v-1.04c-.403.663-1.17 1.144-2.236 1.144-1.781 0-3.198-1.456-3.198-3.744zm5.434.013c0-1.157-.741-1.794-1.586-1.794-.832 0-1.586.624-1.586 1.781s.754 1.807 1.586 1.807c.845 0 1.586-.637 1.586-1.794z" />
					</g>
				</svg>
			),
		},
		{
			description: i18n.translate( 'Simple, yet sophisticated, with subtle, elegant typography.', {
				comment: 'A description of a WordPress theme style.',
			} ),
			id: 'professional',
			label: 'Professional',
			theme: 'pub/professional-business',
			fontUrl: 'https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700',
			buttonSvg: (
				<svg xmlns="http://www.w3.org/2000/svg" width="130" height="32">
					<g fill="none" fillRule="evenodd">
						<path stroke="#000" strokeWidth="2" d="M1 1h128v30H1z" />
						<path
							fill="#000"
							d="M16.107 9.129c.378 0 .791-.01 1.24-.03.45-.019.87-.029 1.26-.029.769 0 1.491.104 2.168.313.677.208 1.27.596 1.778 1.162s.761 1.266.761 2.1c0 1.054-.406 1.966-1.22 2.734s-1.8 1.152-2.96 1.152c-.208 0-.416-.032-.624-.097a2.573 2.573 0 0 1-.469-.186.61.61 0 0 1-.195-.146c-.052-.079-.085-.222-.098-.43-.013-.208.013-.313.078-.313.17.105.462.157.88.157 1.093 0 1.64-.886 1.64-2.657 0-1.783-.6-2.675-1.797-2.675-.456 0-.755.052-.899.156-.156.117-.234.755-.234 1.914v6.992c0 .664.046 1.198.137 1.602.039.156.254.28.644.37.39.092.684.137.88.137.051 0 .077.124.077.372 0 .156-.013.273-.039.351-1.562-.078-2.558-.117-2.988-.117l-2.852.117c-.052-.052-.078-.163-.078-.332 0-.26.026-.39.078-.39.157 0 .4-.046.733-.137.332-.091.517-.19.556-.293.079-.3.118-.873.118-1.719v-7.383c0-.716-.04-1.224-.118-1.523-.039-.104-.23-.222-.576-.352-.345-.13-.589-.195-.732-.195-.052 0-.078-.117-.078-.352 0-.208.02-.332.058-.37 1.172.064 2.13.097 2.871.097zm14.61 4.14c.573 0 1.133.241 1.68.723 0 .677-.082 1.179-.245 1.504-.162.326-.459.488-.888.488-.26 0-.56-.15-.899-.449-.338-.3-.638-.45-.898-.45-.39 0-.668.219-.83.655a3.962 3.962 0 0 0-.244 1.397v1.972c0 .82.045 1.407.136 1.758.026.091.199.195.518.313.319.117.53.175.635.175.039 0 .061.108.068.323.007.215-.003.348-.03.4-.156-.013-.553-.042-1.19-.088a21.979 21.979 0 0 0-1.407-.068c-.312 0-.8.023-1.465.068-.664.046-1.068.075-1.21.088-.053-.052-.079-.185-.079-.4 0-.215.026-.323.078-.323.143 0 .384-.058.723-.175.338-.118.52-.222.547-.313.09-.39.137-.885.137-1.484v-2.676c0-.73-.118-1.217-.352-1.465a.963.963 0 0 0-.41-.254 3.442 3.442 0 0 0-.469-.136c-.13-.026-.195-.046-.195-.059 0-.456.032-.684.097-.684.157 0 .417-.035.782-.107.364-.072.84-.173 1.425-.303.586-.13 1.042-.228 1.368-.293.13-.039.201-.058.214-.058.066 0 .13.042.196.127.065.084.097.153.097.205a5.467 5.467 0 0 0-.058.508c-.013.182-.026.299-.04.351.639-.846 1.374-1.27 2.208-1.27zm7.031 1.075c-.378 0-.69.15-.937.449-.248.3-.41.641-.489 1.025-.078.384-.117.81-.117 1.28 0 2.643.67 3.965 2.012 3.965.547 0 .947-.267 1.201-.801.254-.534.38-1.16.38-1.875 0-2.696-.683-4.043-2.05-4.043zm-2.988.215c.898-.86 1.985-1.29 3.261-1.29 1.277 0 2.36.43 3.252 1.29.892.859 1.338 1.907 1.338 3.144s-.442 2.285-1.328 3.145c-.885.859-1.972 1.289-3.262 1.289-1.276 0-2.36-.43-3.251-1.29-.892-.859-1.338-1.907-1.338-3.144s.442-2.285 1.328-3.144zM49.7 8.406c.573 0 1.071.065 1.494.196.423.13.687.286.791.468.04.248.059.511.059.791s-.085.534-.254.762c-.17.228-.41.342-.723.342-.273 0-.51-.114-.713-.342a47.854 47.854 0 0 1-.585-.674c-.19-.221-.407-.332-.655-.332-.416 0-.722.3-.918.899-.195.599-.293 1.334-.293 2.207v.8c0 .066.033.098.098.098h2.168c.065 0 .098.046.098.137 0 .364-.079.703-.235 1.015h-2.012c-.078 0-.117.04-.117.118v4.199c0 .833.046 1.426.137 1.777.026.091.208.195.547.313.338.117.566.175.683.175.04 0 .062.108.069.323.006.215-.003.348-.03.4-.143-.013-.55-.042-1.22-.088a24.242 24.242 0 0 0-1.455-.068c-.313 0-.801.023-1.465.068-.664.046-1.068.075-1.211.088-.052-.052-.078-.185-.078-.4 0-.215.026-.323.078-.323.143 0 .384-.058.723-.175.338-.118.52-.222.547-.313.09-.39.136-.885.136-1.484V14.91c0-.091-.032-.137-.097-.137h-1.309c-.04 0-.059-.039-.059-.117 0-.169.082-.387.245-.654.162-.267.354-.4.576-.4h.547c.065 0 .097-.04.097-.118v-.136c0-1.355.414-2.513 1.24-3.477.827-.963 1.86-1.452 3.096-1.465zm5.508 5.938c-.508 0-.879.244-1.113.732-.235.488-.352.967-.352 1.436 0 .078.046.117.137.117h2.48c.183 0 .274-.124.274-.371 0-.495-.134-.938-.4-1.328-.268-.39-.61-.586-1.026-.586zm.098-1.074c1.172 0 2.112.406 2.822 1.22s1.064 1.644 1.064 2.49c0 .3-.061.495-.185.586-.124.092-.368.137-.733.137h-4.414c-.078 0-.117.046-.117.137 0 .703.199 1.334.596 1.894.397.56.967.84 1.709.84.43 0 .84-.062 1.23-.185.39-.124.664-.235.82-.332a9.56 9.56 0 0 0 .626-.44c.117.052.175.176.175.371a.87.87 0 0 1-.078.39c-.13.313-.52.684-1.172 1.114-.65.43-1.38.645-2.187.645-1.198 0-2.23-.436-3.096-1.309-.866-.872-1.299-1.92-1.299-3.144 0-1.25.391-2.299 1.172-3.145.781-.846 1.804-1.27 3.067-1.27zm8.183-.04c1.146 0 1.992.13 2.54.391.13.6.195 1.406.195 2.422 0 .117-.085.176-.254.176-.404 0-.619-.052-.645-.157-.117-.546-.316-.976-.596-1.289-.28-.312-.725-.468-1.337-.468-.287 0-.521.068-.704.205-.182.136-.273.335-.273.595 0 .3.13.557.39.772.261.215.645.446 1.153.693.352.17.628.313.83.43.202.117.469.303.8.557.333.254.58.55.743.888.163.339.244.716.244 1.133 0 .86-.329 1.51-.986 1.953-.658.443-1.494.664-2.51.664a6.2 6.2 0 0 1-1.523-.215c-.56-.143-.964-.319-1.211-.527-.157-.898-.235-1.693-.235-2.383.052-.039.15-.058.293-.058.417 0 .632.058.645.175.221 1.29.924 1.934 2.11 1.934.312 0 .572-.072.78-.215a.693.693 0 0 0 .313-.605c0-.326-.14-.6-.42-.82-.28-.222-.784-.515-1.514-.88-.755-.364-1.315-.764-1.68-1.2-.364-.437-.546-.974-.546-1.612 0-.885.338-1.533 1.015-1.943.678-.41 1.472-.616 2.383-.616zm7.5 0c1.146 0 1.992.13 2.54.391.13.6.195 1.406.195 2.422 0 .117-.085.176-.254.176-.404 0-.619-.052-.645-.157-.117-.546-.316-.976-.596-1.289-.28-.312-.725-.468-1.337-.468-.287 0-.521.068-.704.205-.182.136-.273.335-.273.595 0 .3.13.557.39.772.261.215.645.446 1.153.693.352.17.628.313.83.43.202.117.469.303.8.557.333.254.58.55.743.888.163.339.244.716.244 1.133 0 .86-.329 1.51-.986 1.953-.658.443-1.494.664-2.51.664a6.2 6.2 0 0 1-1.523-.215c-.56-.143-.964-.319-1.211-.527-.157-.898-.235-1.693-.235-2.383.052-.039.15-.058.293-.058.417 0 .632.058.645.175.221 1.29.924 1.934 2.11 1.934.312 0 .572-.072.78-.215a.693.693 0 0 0 .313-.605c0-.326-.14-.6-.42-.82-.28-.222-.784-.515-1.514-.88-.755-.364-1.315-.764-1.68-1.2-.364-.437-.546-.974-.546-1.612 0-.885.338-1.533 1.015-1.943.678-.41 1.472-.616 2.383-.616zm5.664-2.226a1.41 1.41 0 0 1-.43-1.035c0-.404.144-.746.43-1.026.287-.28.629-.42 1.026-.42s.735.14 1.015.42c.28.28.42.622.42 1.026 0 .403-.14.745-.42 1.025-.28.28-.618.42-1.015.42-.397 0-.74-.137-1.026-.41zm2.461 8.086c0 .833.046 1.426.137 1.777.026.091.212.195.557.313.345.117.57.175.673.175.053 0 .079.108.079.323 0 .215-.013.348-.04.4-.13-.013-.533-.042-1.21-.088a24.712 24.712 0 0 0-1.465-.068c-.313 0-.798.023-1.455.068-.658.046-1.065.075-1.221.088-.04-.052-.059-.185-.059-.4 0-.215.02-.323.059-.323.156 0 .4-.058.732-.175.332-.118.511-.222.537-.313.092-.39.137-.885.137-1.484v-2.676c0-.73-.117-1.217-.351-1.465a.965.965 0 0 0-.4-.254 2.98 2.98 0 0 0-.47-.136c-.136-.026-.205-.046-.205-.059 0-.456.033-.684.098-.684.26 0 .83-.088 1.709-.263.879-.176 1.5-.323 1.865-.44a.68.68 0 0 0 .117-.029l.098-.03c.078 0 .147.043.205.128.059.084.088.153.088.205l-.078.586c-.04.286-.072.537-.098.752a5.12 5.12 0 0 0-.039.615v3.457zm6.66-4.746c-.377 0-.69.15-.937.449-.248.3-.41.641-.488 1.025-.079.384-.118.81-.118 1.28 0 2.643.671 3.965 2.012 3.965.547 0 .947-.267 1.201-.801.254-.534.381-1.16.381-1.875 0-2.696-.683-4.043-2.05-4.043zm-2.988.215c.899-.86 1.986-1.29 3.262-1.29s2.36.43 3.252 1.29c.892.859 1.338 1.907 1.338 3.144s-.443 2.285-1.328 3.145c-.886.859-1.973 1.289-3.262 1.289-1.276 0-2.36-.43-3.252-1.29-.892-.859-1.338-1.907-1.338-3.144s.443-2.285 1.328-3.144zm15.938-1.27c.755 0 1.37.32 1.845.957.476.638.713 1.608.713 2.91v1.934c0 .833.046 1.426.137 1.777.026.091.208.195.547.313.338.117.566.175.683.175.04 0 .062.108.069.323.006.215-.004.348-.03.4-.143-.013-.55-.042-1.22-.088a24.242 24.242 0 0 0-1.455-.068c-.313 0-.785.023-1.416.068-.632.046-1.026.075-1.182.088-.052-.052-.078-.185-.078-.4 0-.215.026-.323.078-.323.143 0 .371-.058.684-.175.312-.118.481-.222.507-.313.092-.39.137-.885.137-1.484v-1.758c0-.964-.133-1.65-.4-2.06-.267-.41-.694-.616-1.28-.616-.403 0-.729.075-.976.225-.248.15-.371.361-.371.635v3.28c0 .834.045 1.427.137 1.778.026.091.198.195.517.313.32.117.53.175.635.175.039 0 .062.108.068.323.007.215-.003.348-.03.4-.155-.013-.552-.042-1.19-.088a21.979 21.979 0 0 0-1.407-.068c-.312 0-.8.023-1.465.068-.664.046-1.067.075-1.21.088-.053-.052-.079-.185-.079-.4 0-.215.026-.323.078-.323.144 0 .385-.058.723-.175.339-.118.521-.222.547-.313.091-.39.137-.885.137-1.484v-2.676c0-.73-.117-1.217-.352-1.465a.963.963 0 0 0-.41-.254 3.442 3.442 0 0 0-.469-.136c-.13-.026-.195-.046-.195-.059 0-.456.033-.684.098-.684.156 0 .416-.035.78-.107.365-.072.84-.173 1.427-.303.586-.13 1.041-.228 1.367-.293a.24.24 0 0 0 .088-.02.24.24 0 0 1 .088-.019l.039-.02c.065 0 .13.043.195.128.065.084.098.153.098.205-.052.364-.078.566-.078.605 0 .065.006.104.019.117.026 0 .072-.032.137-.097.729-.677 1.634-1.016 2.715-1.016zm8.71 7.441c.34 0 .603-.08.792-.244a.758.758 0 0 0 .283-.595v-1.973a5.522 5.522 0 0 1-.381.127c-.228.072-.374.12-.44.146l-.37.147c-.183.072-.31.137-.382.195-.071.059-.159.134-.263.225a.74.74 0 0 0-.215.293.995.995 0 0 0-.059.351c0 .47.101.808.303 1.016a.982.982 0 0 0 .733.312zm.782-7.5c.911 0 1.611.251 2.1.752.488.502.732 1.41.732 2.725v3.164c0 .443.156.664.469.664.22 0 .442-.084.664-.254.09.052.136.15.136.293 0 .326-.045.567-.136.723-.183.17-.479.348-.889.537-.41.189-.798.283-1.162.283-.313 0-.612-.094-.899-.283-.286-.189-.475-.407-.566-.654a.676.676 0 0 0-.156.107 4.897 4.897 0 0 1-.85.518c-.189.09-.413.169-.674.234a3.21 3.21 0 0 1-.78.098c-.717 0-1.287-.199-1.71-.596-.423-.397-.635-.895-.635-1.494 0-.352.082-.674.244-.967.163-.293.352-.534.567-.723.215-.188.504-.364.869-.527a9.8 9.8 0 0 1 .938-.371c.26-.085.595-.182 1.005-.293.41-.11.694-.192.85-.244.117-.04.176-.137.176-.293v-.703c0-1.068-.326-1.602-.977-1.602-.755 0-1.133.436-1.133 1.309 0 .286-.117.498-.351.635a1.522 1.522 0 0 1-.781.205c-.6 0-1.01-.196-1.23-.586 0-.664.439-1.273 1.317-1.826a5.27 5.27 0 0 1 2.862-.83zm6.582-1.601c0-.612-.033-1.08-.098-1.406-.065-.209-.403-.313-1.015-.313h-.176c-.078 0-.117-.13-.117-.39 0-.222.039-.332.117-.332a20.194 20.194 0 0 0 2.265-.352c.287-.065.544-.13.772-.195.228-.065.407-.118.537-.157l.195-.058h.04c.051 0 .104.039.156.117.052.078.084.15.097.215a8.323 8.323 0 0 0-.215 1.972l-.02 8.36c0 .833.046 1.426.138 1.777.026.091.208.195.546.313.339.117.567.175.684.175.04 0 .062.108.068.323.007.215-.003.348-.029.4-.143-.013-.55-.042-1.22-.088a24.242 24.242 0 0 0-1.456-.068c-.312 0-.8.023-1.464.068-.665.046-1.068.075-1.211.088-.053-.052-.079-.185-.079-.4 0-.215.026-.323.079-.323.143 0 .384-.058.722-.175.339-.118.521-.222.547-.313.091-.39.137-.885.137-1.484v-7.754z"
						/>
					</g>
				</svg>
			),
		},
		{
			description: i18n.translate( 'A gutenberg-ready business variation.', {
				comment: 'A description of a WordPress theme style.',
			} ),
			id: 'calm',
			label: 'Calm',
			theme: 'pub/calm-business',
			fontUrl: 'https://fonts.googleapis.com/css?family=Rubik:400,700',
			buttonSvg: (
				<svg width="80" height="32" xmlns="http://www.w3.org/2000/svg">
					<g transform="translate(1 8)" fill="none" fillRule="evenodd">
						<path
							d="M14.939 7.664c0-3.78 2.628-6.444 6.354-6.444 3.006 0 5.274 1.692 5.994 4.428h-3.384c-.522-1.08-1.476-1.62-2.646-1.62-1.89 0-3.186 1.404-3.186 3.636s1.296 3.636 3.186 3.636c1.17 0 2.124-.54 2.646-1.62h3.384c-.72 2.736-2.988 4.41-5.994 4.41-3.726 0-6.354-2.646-6.354-6.426zM28.565 8.96c0-3.168 1.962-5.148 4.428-5.148 1.494 0 2.556.684 3.096 1.566V3.956h3.078V14h-3.078v-1.422c-.558.882-1.62 1.566-3.114 1.566-2.448 0-4.41-2.016-4.41-5.184zm7.524.018c0-1.602-1.026-2.484-2.196-2.484-1.152 0-2.196.864-2.196 2.466 0 1.602 1.044 2.502 2.196 2.502 1.17 0 2.196-.882 2.196-2.484zM41.399 14V.68h3.078V14h-3.078zm19.152 0V8.546c0-1.314-.756-2.034-1.926-2.034s-1.926.72-1.926 2.034V14h-3.06V8.546c0-1.314-.756-2.034-1.926-2.034s-1.926.72-1.926 2.034V14h-3.078V3.956h3.078v1.26c.594-.81 1.62-1.368 2.934-1.368 1.512 0 2.736.666 3.42 1.872a4.04 4.04 0 0 1 3.384-1.872c2.484 0 4.086 1.584 4.086 4.284V14h-3.06z"
							fill="#242424"
						/>
						<rect stroke="#232A2E" strokeWidth="2" y="4" width="8" height="8" rx="2" />
						<rect stroke="#232A2E" strokeWidth="2" x="70" y="4" width="8" height="8" rx="2" />
					</g>
				</svg>
			),
		},
	],
};

/**
 * Returns a theme base CSS URI.
 *
 * @param  {String}  themeSlug A theme slug, e.g., `pub/business`
 * @param  {Boolean} isRtl     If the current locale is a right-to-left language
 * @return {String}            The theme CSS URI.
 */
export const getThemeCssUri = ( themeSlug, isRtl ) =>
	`https://s0.wp.com/wp-content/themes/${ themeSlug }/style${ isRtl ? '-rtl' : '' }.css`;

export const DEFAULT_FONT_URI = 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,500,700';

/**
 * Returns a style definition object
 *
 * @param  {String} siteType A site type/segement as selected in the onboarding flow
 * @return {Object}          The site style definition object.
 */
export const getSiteStyleOptions = siteType =>
	get( siteStyleOptions, siteType, siteStyleOptions.business );
