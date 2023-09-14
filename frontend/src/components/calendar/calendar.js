import React from "react";
import './calendarstyles.css';
import $ from "jquery";


export default function Calendar() {

    var app = {
        settings: {
            container: $('.calendar'),
            calendar: $('.front'),
            days: $('.weeks span'),
            form: $('.back'),
            input: $('.back input'),
            buttons: $('.back button')
        },

        init: function () {
            let instance = this;
            let settings = this.settings;
            this.bindUIActions();
        },

        swap: function (currentSide, desiredSide) {
            this.settings.container.toggleClass('flip');

            currentSide.fadeOut(900);
            currentSide.hide();
            desiredSide.show();

        },

        bindUIActions: function () {
            this.settings.days.on('click', function () {
                this.instance.swap(this.settings.calendar, this.settings.form);
                this.settings.input.focus();
            });

            this.settings.buttons.on('click', function () {
                this.instance.swap(this.settings.form, this.settings.calendar);
            });
        }
    }

    app.init();


    return (
        <div>
            <div class="cal_container" >
                <div class="cal_calendar">
                    <div class="cal_front">
                        <div class="cal_current-date">
                            <h1>Friday 15th</h1>
                            <h1>January 2016</h1>
                        </div>

                        <div class="cal_current-month">
                            <ul class="cal_week-days">
                                <li>MON</li>
                                <li>TUE</li>
                                <li>WED</li>
                                <li>THU</li>
                                <li>FRI</li>
                                <li>SAT</li>
                                <li>SUN</li>
                            </ul>

                            <div class="cal_weeks">
                                <div class="first">
                                    <span class="last-month">28</span>
                                    <span class="last-month">29</span>
                                    <span class="last-month">30</span>
                                    <span class="last-month">31</span>
                                    <span>01</span>
                                    <span>02</span>
                                    <span>03</span>
                                </div>

                                <div class="second">
                                    <span>04</span>
                                    <span>05</span>
                                    <span class="event">06</span>
                                    <span>07</span>
                                    <span>08</span>
                                    <span>09</span>
                                    <span>10</span>
                                </div>

                                <div class="third">
                                    <span>11</span>
                                    <span>12</span>
                                    <span>13</span>
                                    <span>14</span>
                                    <span class="active">15</span>
                                    <span>16</span>
                                    <span>17</span>
                                </div>

                                <div class="fourth">
                                    <span>18</span>
                                    <span>19</span>
                                    <span>20</span>
                                    <span>21</span>
                                    <span>22</span>
                                    <span>23</span>
                                    <span>24</span>
                                </div>

                                <div class="fifth">
                                    <span>25</span>
                                    <span>26</span>
                                    <span>27</span>
                                    <span>28</span>
                                    <span>29</span>
                                    <span>30</span>
                                    <span>31</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="cal_back">
                        <input placeholder="What's the event?" />
                        <div class="cal_info">
                            <div class="cal_date">
                                <p class="cal_info-date">
                                    Date: <span>Jan 15th, 2016</span>
                                </p>
                                <p class="cal_info-time">
                                    Time: <span>6:35 PM</span>
                                </p>
                            </div>
                            <div class="cal_address">
                                <p>
                                    Address: <span>129 W 81st St, New York, NY</span>
                                </p>
                            </div>
                            <div class="cal_observations">
                                <p>
                                    Observations: <span>Be there 15 minutes earlier</span>
                                </p>
                            </div>
                        </div>

                        <div class="cal_actions">
                            <button class="cal_save">
                                Save <i class="cal_ion-checkmark"></i>
                            </button>
                            <button class="cal_dismiss">
                                Dismiss <i class="cal_ion-android-close"></i>
                            </button>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>

    )
}