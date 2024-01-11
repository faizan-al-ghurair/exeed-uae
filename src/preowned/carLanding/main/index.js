import carImg1 from '../../../images/car1.jpg';
import carImg2 from '../../../images/car2.jpg';
import carImg3 from '../../../images/car3.jpg';
import carImg4 from '../../../images/car4.jpg';
import carImg5 from '../../../images/car5.jpg';
import carImg6 from '../../../images/car6.jpg';

export const MainSection = () => {
    return(
        <div className="main_section">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="landing_hd">38 Vehicles Available</h2>
                </div>
                <div className="col-md-4 offset-md-4">
                    <select className="side-input">
                        <option value="LowPriceFirst">LOW PRICE FIRST</option>
                    </select>
                </div>
            </div>
            <div className="row mt-5 gx-3">
                <div className="col-md-4">
                    <div className="vehical_wrap">
                        <img src={carImg1} alt='Car' className='car_img' />
                        <h3 className='vehical_hd'>EXEED VX</h3>
                        <h4 className='vehical_price'>124,900 AED</h4>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Year</p>
                                <p className='vehical_detail_value'>2021</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Kms</p>
                                <p className='vehical_detail_value'>1000</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Engine</p>
                                <p className='vehical_detail_value'>2.4L</p>
                            </div>
                        </div>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Interior Color</p>
                                <p className='vehical_detail_value'>White</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Exterior Color</p>
                                <p className='vehical_detail_value'>Beige</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vehical_wrap">
                        <img src={carImg2} alt='Car' className='car_img' />
                        <h3 className='vehical_hd'>EXEED VX</h3>
                        <h4 className='vehical_price'>124,900 AED</h4>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Year</p>
                                <p className='vehical_detail_value'>2021</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Kms</p>
                                <p className='vehical_detail_value'>1000</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Engine</p>
                                <p className='vehical_detail_value'>2.4L</p>
                            </div>
                        </div>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Interior Color</p>
                                <p className='vehical_detail_value'>White</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Exterior Color</p>
                                <p className='vehical_detail_value'>Beige</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vehical_wrap">
                        <img src={carImg3} alt='Car' className='car_img' />
                        <h3 className='vehical_hd'>EXEED VX</h3>
                        <h4 className='vehical_price'>124,900 AED</h4>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Year</p>
                                <p className='vehical_detail_value'>2021</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Kms</p>
                                <p className='vehical_detail_value'>1000</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Engine</p>
                                <p className='vehical_detail_value'>2.4L</p>
                            </div>
                        </div>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Interior Color</p>
                                <p className='vehical_detail_value'>White</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Exterior Color</p>
                                <p className='vehical_detail_value'>Beige</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vehical_wrap">
                        <img src={carImg4} alt='Car' className='car_img' />
                        <h3 className='vehical_hd'>EXEED VX</h3>
                        <h4 className='vehical_price'>124,900 AED</h4>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Year</p>
                                <p className='vehical_detail_value'>2021</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Kms</p>
                                <p className='vehical_detail_value'>1000</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Engine</p>
                                <p className='vehical_detail_value'>2.4L</p>
                            </div>
                        </div>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Interior Color</p>
                                <p className='vehical_detail_value'>White</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Exterior Color</p>
                                <p className='vehical_detail_value'>Beige</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vehical_wrap">
                        <img src={carImg5} alt='Car' className='car_img' />
                        <h3 className='vehical_hd'>EXEED VX</h3>
                        <h4 className='vehical_price'>124,900 AED</h4>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Year</p>
                                <p className='vehical_detail_value'>2021</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Kms</p>
                                <p className='vehical_detail_value'>1000</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Engine</p>
                                <p className='vehical_detail_value'>2.4L</p>
                            </div>
                        </div>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Interior Color</p>
                                <p className='vehical_detail_value'>White</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Exterior Color</p>
                                <p className='vehical_detail_value'>Beige</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vehical_wrap">
                        <img src={carImg6} alt='Car' className='car_img' />
                        <h3 className='vehical_hd'>EXEED VX</h3>
                        <h4 className='vehical_price'>124,900 AED</h4>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Year</p>
                                <p className='vehical_detail_value'>2021</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Kms</p>
                                <p className='vehical_detail_value'>1000</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Engine</p>
                                <p className='vehical_detail_value'>2.4L</p>
                            </div>
                        </div>
                        <div className='vehical_detail_bar'>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Interior Color</p>
                                <p className='vehical_detail_value'>White</p>
                            </div>
                            <div className='vehical_detail_bar_col'>
                                <p className='vehical_detail_label'>Exterior Color</p>
                                <p className='vehical_detail_value'>Beige</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}