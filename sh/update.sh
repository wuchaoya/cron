docker run -it --env-file=/root/.env -e "CONFIG=$(cat /root/config/config.json | jq -r tostring)" algolia/docsearch-scraper
