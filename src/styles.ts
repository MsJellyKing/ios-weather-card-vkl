import { css } from 'lit'

export default css`

  ha-card {
    --bar-height: 0.4rem;
    height: 100%;
  }

  kl-weather-card-today {
    display: flex;
  }

  kl-weather-card-today-left {
    display: flex;
    width: 35%;
    align-items: center;
    justify-content: center;
  }

  .grow-img {
    max-width: 2.7rem;
    max-height: 2.7rem;
  }

  kl-weather-card-today-right {
    display: flex;
    width: 65%;
    justify-content: space-around;
    align-items: center;
  }

  kl-weather-card-today-right-wrap {
    display: flex;
    flex-direction: column;
  }

  kl-weather-card-today-right-wrap-top {
    width: 100%;
    text-align: end;
    display: block;
  }

  kl-weather-card-today-right-wrap-center {
    display: flex;
    height: 4rem;
    font-size: 3.5rem;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }

  kl-weather-card-today-right-wrap-bottom {
    display: flex;
    justify-content: start;
  }

  kl-weather-card-forecast {
    display: block;
  }

  kl-weather-card-hourly-forecast {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }

  kl-weather-card-hourly-forecast-item {
    display: grid;
    flex-direction: column;
    /* grid-template-columns: var(--col-one-size) 7rem 2.1rem auto 2.1rem; */
    align-content: stretch;
    grid-gap: 0;
    margin-right: 1rem;

    forecast-text {
      margin: 0;

      .time-period {
        font-size: 0.9rem;
      }
    }
  }

  kl-weather-card-forecast-row {
    display: grid;
    grid-template-columns: var(--col-one-size) 7rem 2.1rem auto 2.1rem;
    align-items: center;
    grid-gap: 0.5rem;
    border-bottom: 1px solid rgba(255,255,255,.1);
  }

  kl-weather-card-forecast-row:first-child {
    margin-top: -1rem;
  }

  kl-weather-card-forecast-row:last-child {
    border-bottom: none;
    margin-bottom: -1rem;
  }

  forecast-text {
    text-align: var(--text-align);
    white-space: nowrap;
    text-overflow: clip;
    font-size: 1.1rem;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
  }

  forecast-probability {
    text-align: center;
    white-space: nowrap;
    text-overflow: clip;
    font-size: 1rem;
    color: rgb(120, 162, 204);
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }

  forecast-icon {
    display: grid;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem; 
  }

  forecast-temperature-bar {
    position: relative;
    width: 100%;
    height: var(--bar-height);
    border-radius: calc(var(--bar-height) / 2);
    overflow: hidden;
  }

  forecast-temperature-bar-background {
    left: 0%;
    right: 100%;
    width: 100%;
    opacity: 0.25;
    background: var(--light-primary-color);
  }

  forecast-temperature-bar-current-indicator-dot {
    --border-width: 2px;
    background-color: var(--primary-text-color);
    border-radius: 50%;
    width: calc(var(--bar-height)*2);
    height: calc(var(--bar-height)*2) !important;
    box-shadow: inset 0 0 0 var(--border-width) var(--text-light-primary-color);
    margin-left: calc(var(--move-right) * -1.5 * var(--bar-height));
    margin-top: calc(var(--move-right) * -0.5 * var(--bar-height));
  }

  forecast-temperature-bar-range {
    border-radius: calc(var(--bar-height) / 2);
    left: var(--start-percent);
    right: calc(100% - var(--end-percent));
    background: linear-gradient(to right, var(--gradient));
    overflow: hidden;
    min-width: var(--bar-height);
    margin-left: calc(var(--move-right) * -1 * var(--bar-height));
  }

  forecast-temperature-bar-current-indicator {
    opacity: 0.75;
    left: var(--position);
  }

  forecast-temperature-bar-current-indicator,
  forecast-temperature-bar-current-indicator-dot,
  forecast-temperature-bar-background,
  forecast-temperature-bar-range {
    height: 100%;
    position: absolute;
  }
`
