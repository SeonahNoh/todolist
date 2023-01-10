import './TodoTemplate.scss';
import cat from '../img/cat_img.png';

function TodoTemplate({children, todos}) { // 중괄호해야 함
    const weekArr = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat') 
    const today = new Date();
    const nowDay = weekArr[today.getDay()];
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth();
    const nowDate = today.getDate();
    const setDate = `${nowYear}년 ${nowMonth + 1}월 ${nowDate}일`;

    function dayOfWeek() {
        switch(nowDay) {
            case 'Sun': return <h2><span>S</span><span>u</span><span>n</span><span>+</span></h2>
            break;
            case 'Mon': return <h2><span>M</span><span>o</span><span>n</span><span>+</span></h2>
            break;
            case 'Tue': return <h2><span>T</span><span>u</span><span>e</span><span>+</span></h2>
            break;
            case 'Wed': return <h2><span>W</span><span>e</span><span>d</span><span>+</span></h2>
            break;
            case 'Thur': return <h2><span>T</span><span>h</span><span>u</span><span>+</span></h2>
            break;
            case 'Fri': return <h2><span>F</span><span>r</span><span>i</span><span>+</span></h2>
            break;
            case 'Sat': return <h2><span>S</span><span>a</span><span>t</span><span>+</span></h2>
            break;
        }
    }

    function completeRate() {
        let completedTodosCount = 0;
        for (let i = 0 ; i < todos.length; i++) {
            if(todos[i].checked == true) {
                completedTodosCount += 1;
            }
        }
        
        let cal = Math.ceil(completedTodosCount/todos.length * 100);
        return cal;
    }

    const $stype = {
        display: 'inline-block',
        width: completeRate() + '%',
        margin: '0 10px 0 10px',
        height: 20,
        borderRadius: 25,
        background: '#FF6A70'
    }
    
    return (
        <div className='TodoTemplate'>
            {dayOfWeek()}
            <h1 className='title'>투두프렌즈 <img src={cat} alt="cat" className="img" /></h1>
            <div className='date'>{setDate}</div>
            <div className='completeRate'>
                <div className='rateTitle'>Completed :</div>
                <div className='progressbar'>
                    <span style={$stype}></span>
                    {`${completeRate()}%`}
                </div>
            </div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default TodoTemplate;