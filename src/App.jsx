import { Divider, Collapse, Typography } from 'antd';
import './App.css';
import star from '../src/assets/icon-star.svg';
import { useState } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
const { Text } = Typography;

let starIcon = <img src={star} alt="star" />;

const text = [
	'What is Frontend Mentor, and how will it help me?',
	'Is Frontend Mentor free?',
	'Can I use Frontend Mentor projects in my portfolio?',
	`How can I get help if I'm stuck on a Frontend Mentor challenge?`,
];

const answers = [
	"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	`Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
	`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
	`The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
];

function App() {
	return (
		<>
			<header className="hero"></header>
			<main className="container">
				<div className="faqs">
					<div className="heading">
						{starIcon} <Text className="text-heading">FAQs</Text>
					</div>
					{answers.map((answer, i) => {
						return (
							<div key={i}>
								<Collapse
									accordion
									ghost
									items={[
										{
											key: i + 1,
											label: <h4>{text[i]}</h4>,
											children: <p>{answer}</p>,
											showArrow: true,
										},
									]}
									defaultActiveKey={['1']}
									expandIconPosition="end"
									className="collapse"
									expandIcon={({ isActive }) =>
										isActive ? (
											<MinusCircleOutlined
												style={{
													backgroundColor: 'black',
													borderColor:
														'hsl(0, 0%, 100%)',
													border: 'none',
													borderRadius: '50%',
													color: 'hsl(0, 0%, 100%)',
													fontSize: '25px',
												}}
											/>
										) : (
											<PlusCircleOutlined
												style={{
													backgroundColor: '#AD28EB',
													border: 'none',
													borderRadius: '50%',
													color: 'hsl(0, 0%, 100%)',
													fontSize: '25px',
												}}
											/>
										)
									}
								/>
								{i <= 2 ? <Divider style={{}} /> : ''}
							</div>
						);
					})}
					<div className="attribution">
						Challenge by{' '}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by <a href="#">JSimalango</a>.
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
