docker run -it --env-file=.env -e "CONFIG=$(cat /root/config/config.json | jq -r tostring)" algolia/docsearch-scraper
