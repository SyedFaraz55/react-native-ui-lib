interface ConfigOptions {
  usePlatformColors?: boolean;
}

class Config {
  usePlatformColors = false;

  public setConfig(options: ConfigOptions) {
    const {usePlatformColors = false} = options;
    this.usePlatformColors = usePlatformColors;
  }
}

export default new Config();