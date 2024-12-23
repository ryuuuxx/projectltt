document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthDisplay = document.getElementById('currentMonth');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const selectButton = document.getElementById('selectButton');
    const selectedDatesDisplay = document.getElementById('selectedDates');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    let currentDate = new Date();
    let selectedStartDate = null;
    let selectedEndDate = null;

    function generateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startingDayOfWeek = firstDayOfMonth.getDay();
    
        currentMonthDisplay.textContent = `${year}년 ${month + 1}월`;
        calendarDays.innerHTML = '';
    
        let dayCounter = 1;
    
        // 시작 요일 이전의 공백 칸
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day', 'empty');
            calendarDays.appendChild(emptyDay);
        }
        
        // 날짜 생성
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;
            dayElement.dataset.date = `${year}-${String(month + 1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
            
            // 이미 선택된 날짜라면 선택 표시
            if(selectedStartDate){
                const currentDate= new Date(dayElement.dataset.date);
                if(currentDate >= new Date(selectedStartDate) && currentDate <= new Date(selectedEndDate)){
                    dayElement.classList.add('in-range');
                    if (currentDate.getTime() === new Date(selectedStartDate).getTime() || currentDate.getTime() === new Date(selectedEndDate).getTime()){
                        dayElement.classList.add('selected');
                    }
                }
            }
            dayElement.addEventListener('click', selectDate);
            calendarDays.appendChild(dayElement);
        }
    }
    function selectDate(event) {
        const clickedDate = event.target.dataset.date;
        const clickedDayElement = event.target;
        
        if(!selectedStartDate){
            selectedStartDate = clickedDate;
            selectedEndDate = clickedDate;
            generateCalendar()
            return;
        }
        if(selectedStartDate && selectedEndDate && selectedStartDate == selectedEndDate){
            selectedEndDate = clickedDate;
            if(new Date(selectedEndDate) < new Date(selectedStartDate)){
                 const temp = selectedStartDate;
                 selectedStartDate = selectedEndDate;
                 selectedEndDate = temp;
            }
           generateCalendar()
            return;
        }

    }
    function updateSelectedDatesDisplay(){
          if(selectedStartDate && selectedEndDate){
             selectedDatesDisplay.textContent = `선택된 날짜: ${selectedStartDate} ~ ${selectedEndDate}`;
         }
    }
    function checkDateSelection() {
        if (startDateInput.value && endDateInput.value) {
            selectButton.disabled = false; // 시작일과 종료일 모두 선택 시 버튼 활성화
            } else {
                selectButton.disabled = true; // 둘 중 하나라도 선택 안됐을 시 버튼 비활성화
                }
    }


    selectButton.addEventListener('click', () => {
        updateSelectedDatesDisplay();
    })
    prevMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar();
    });

    nextMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar();
    });

    generateCalendar();
});