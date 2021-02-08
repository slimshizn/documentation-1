(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{415:function(e,t,a){"use strict";a.r(t);var s=a(46),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-ssl-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-ssl-certificates"}},[e._v("#")]),e._v(" Creating SSL Certificates")]),e._v(" "),a("p",[e._v("This tutorial briefly covers creating new SSL certificates for your panel and daemon.")]),e._v(" "),a("h2",{attrs:{id:"method-1-using-certbot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-1-using-certbot"}},[e._v("#")]),e._v(" Method 1: Using Certbot")]),e._v(" "),a("p",[e._v("To begin, we will be installing certbot, a simple script that will automatically renew our certificates and allow much\ncleaner creation of them. The command below is for Ubuntu distributions, but you can always check "),a("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Certbot's official\nsite"),a("OutboundLink")],1),e._v(" for installation instructions. We have also included a command below to install certbot's\nNGINX/Apache plugin so you won't have to stop your webserver.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y certbot\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run this if you use Nginx")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y python3-certbot-nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run this of you use Apache")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y python3-certbot-apache\n")])])]),a("h3",{attrs:{id:"creating-a-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-certificate"}},[e._v("#")]),e._v(" Creating a Certificate")]),e._v(" "),a("p",[e._v("After installing certbot, we need to then generate a certificate. There are a couple ways to do that, but the easiest\nis to use the webserver-specific certbot plugin you just installed.")]),e._v(" "),a("p",[e._v("Then, in the command below, you should replace "),a("code",[e._v("example.com")]),e._v(" with the domain you would like to generate a certificate\nfor. If you have multiple domains you would like certificates for, simply add more "),a("code",[e._v("-d anotherdomain.com")]),e._v(" flags to the\ncommand. You can also look into generating a wildcard certificate but that is not covered in this tutorial.")]),e._v(" "),a("p",[e._v("Since we are using certbot's NGINX/Apache plugin, you won't need to restart your webserver to have the certificate\napplied (assuming that you've already configured the webservers to use SSL).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Nginx")]),e._v("\ncertbot certonly --nginx -d example.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Apache")]),e._v("\ncertbot certonly --apache -d example.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.")]),e._v("\ncertbot certonly --standalone -d example.com\n")])])]),a("h3",{attrs:{id:"auto-renewal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-renewal"}},[e._v("#")]),e._v(" Auto Renewal")]),e._v(" "),a("p",[e._v("You'll also probably want to configure automatic renewal by adding the command below to a cronjob that runs daily.\nYou can add the command below to that crontab. For advanced users, we suggest installing and using "),a("a",{attrs:{href:"https://acme.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("acme.sh"),a("OutboundLink")],1),e._v("\nwhich provides more options (see below), and is much more powerful than certbot.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("certbot renew\n")])])]),a("h3",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("If you get an "),a("code",[e._v("Insecure Connection")]),e._v(" or related error when trying to access your panel, it is likely that the SSL certificate has expired.\nThis can be easily fixed by renewing the SSL certificate, although using the command "),a("code",[e._v("certbot renew")]),e._v(" won't do the job. As it'll give a error like: "),a("code",[e._v("Error: Attempting to renew cert (domain) from /etc/letsencrypt/renew/domain.conf produced an unexpected error")]),e._v(".\nThis will happen especially if you're running NGINX instead of Apache. The solution for this is to stop NGINX, then renew the certificate, finally restart NGINX.")]),e._v(" "),a("p",[e._v("Stop NGINX:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl stop nginx\n")])])]),a("p",[e._v("Renew the certificate:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("certbot renew\n")])])]),a("p",[e._v("Once the process has complete, you can restart the NGINX service:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl start nginx\n")])])]),a("h2",{attrs:{id:"method-2-using-acme-sh-cloudflare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-2-using-acme-sh-cloudflare"}},[e._v("#")]),e._v(" Method 2: Using acme.sh (Cloudflare)")]),e._v(" "),a("p",[e._v("This is for advanced users, of which their server systems do not have access to port 80. The command below is for Ubuntu distributions and CloudFlare API (you may google for other APIs for other DNS providers), but you can always check "),a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("acme.sh's official site"),a("OutboundLink")],1),e._v(" for installation instructions.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://get.acme.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n")])])]),a("h3",{attrs:{id:"obtaining-cloudflare-api-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-cloudflare-api-key"}},[e._v("#")]),e._v(" Obtaining CloudFlare API Key")]),e._v(" "),a("p",[e._v('After installing acme.sh, we need to fetch a CloudFlare API key. Please make sure that a DNS record (A or CNAME record) is pointing to your target node, and set the cloud to grey (bypassing CloudFlare proxy). Then go to My Profile > API keys and on Global API Key subtab, click on "view", enter your CloudFlare password, and copy the API key to clipboard.')]),e._v(" "),a("h3",{attrs:{id:"creating-a-certificate-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-certificate-2"}},[e._v("#")]),e._v(" Creating a Certificate")]),e._v(" "),a("p",[e._v("Since the configuration file is based on Certbot, we need to create the folder manually.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /etc/letsencrypt/live/example.com\n")])])]),a("p",[e._v("After installing certbot and obtaining CloudFlare API key, we need to then generate a certificate. First input the CloudFlare API credentials.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CF_Key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your_CloudFlare_API_Key"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CF_Email")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your_CloudFlare_Account@example.com"')]),e._v("\n")])])]),a("p",[e._v("Then create the certificate.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh --issue --standalone -d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example.com"')]),e._v(" --dns dns_cf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--key-file /etc/letsencrypt/live/example.com/privkey.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem \n")])])]),a("h3",{attrs:{id:"auto-renewal-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-renewal-2"}},[e._v("#")]),e._v(" Auto Renewal")]),e._v(" "),a("p",[e._v("After running the script for the first time, it will be added to the crontab automatically. You may edit the auto renewal interval by editing the crontab.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("crontab")]),e._v(" -e\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);