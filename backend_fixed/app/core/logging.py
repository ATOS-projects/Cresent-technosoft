import logging
import logging.config
import yaml
from pathlib import Path


def configure_logging():
    config_path = Path("logging.yaml")

    if config_path.exists():
        with open(config_path, "r") as f:
            config = yaml.safe_load(f)
            logging.config.dictConfig(config)
    else:
        logging.basicConfig(
            level=logging.INFO,
            format="%(asctime)s | %(levelname)s | %(message)s",
        )