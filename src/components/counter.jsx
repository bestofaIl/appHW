import React from "react";

const Counter = (props) => {
    const { value } = props;

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    const getBadgeClasses = () => {
        let classes = 'badge m-2 ';
        classes += (value === 0) ? 'bg-warning' : 'bg-primary';
        return classes
    };


    const handleIncrement = () => {
        props.onIncrement(props.id);
    }

    const handleDecrement = () => {
        props.onDecrement(props.id);
    };





    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleIncrement}>+</button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleDecrement}>
                -
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    );
};

export default Counter;



// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>Вы кликнули {this.state.count} раз(а)</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Нажми на меня
//                 </button>
//             </div>
//         );
//     }
// }

//export default Example;