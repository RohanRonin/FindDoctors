import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Button, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import './DoctorDetail.css';

const DoctorDetail = () => {
    return (
        <Box className="doctor-detail-container">
            <Grid container spacing={2}>
                {/* Doctor Information */}
                <Grid item xs={12} md={4}>
                    <Card className="doctor-info-card">
                        <Avatar
                            alt="Dr. Jessika Linda"
                            src="link-to-avatar-image.jpg" // Replace with actual image link
                            className="doctor-avatar"
                        />
                        <Typography variant="h6">Hello I am,</Typography>
                        <Typography variant="h4" className="doctor-name">Dr. Jessika Linda</Typography>
                        <Typography variant="subtitle1" className="doctor-title">MBBS, MS - General Surgery, General Physician</Typography>
                        <Typography variant="body2" className="experience">16 Years Experience Overall</Typography>
                        <Box className="ratings">
                            {[...Array(5)].map((_, index) => (
                                <StarIcon key={index} className="star-icon" />
                            ))}
                            <Typography variant="body2">2896 Reviews</Typography>
                        </Box>
                    </Card>
                </Grid>

                {/* Statistics */}
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card className="stats-card">
                                <CardContent>
                                    <Typography variant="h5" align="center">3605</Typography>
                                    <Typography variant="body2" align="center">Patients</Typography>
                                    <Typography variant="body2" align="center" className="stat-percentage high">68% High</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className="stats-card">
                                <CardContent>
                                    <Typography variant="h5" align="center">507</Typography>
                                    <Typography variant="body2" align="center">Surgeries</Typography>
                                    <Typography variant="body2" align="center" className="stat-percentage moderate">26% High</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className="stats-card">
                                <CardContent>
                                    <Typography variant="h5" align="center">2896</Typography>
                                    <Typography variant="body2" align="center">Reviews</Typography>
                                    <Typography variant="body2" align="center" className="stat-percentage low">30% High</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                {/* About Section */}
                <Grid item xs={12}>
                    <Card className="about-card">
                        <CardContent>
                            <Typography variant="h6">About</Typography>
                            <Typography variant="body2" className="about-text">
                                Dr. Jessika Linda is an eminent Endocrinologist associated with med hospitals who is specially trained to diagnose diseases related to glands. She specializes in treating people who suffer from hormonal imbalances, typically from glands in the endocrine system. The most common conditions treated by Dr. Linda are Diabetes, Metabolic disorders, Lack of growth, Osteoporosis, Thyroid diseases, Cancers of the endocrine glands, Over- or under-production of hormones, Cholesterol disorders, Hypertension, and Infertility. Also available for consultation at Med hospital. Dr. Linda's approach lies in understanding patients' diseases and the procedure recommended along with care.
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1">Specialized in</Typography>
                                <Box className="specialization-chips">
                                    <Chip label="Diabetes" />
                                    <Chip label="Thyroid" />
                                    <Chip label="Osteoporosis" />
                                    <Chip label="Surgeon" />
                                    <Chip label="General" />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Availability Section */}
                <Grid item xs={12} md={4}>
                    <Card className="availability-card">
                        <CardContent>
                            <Typography variant="h6">Availability</Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={6}><Chip label="Mon - 9:AM - 2:PM" /></Grid>
                                <Grid item xs={6}><Chip label="Tue - 9:AM - 2:PM" /></Grid>
                                <Grid item xs={6}><Chip label="Wed - 9:AM - 2:PM" /></Grid>
                                <Grid item xs={6}><Chip label="Thu - 9:AM - 2:PM" /></Grid>
                                <Grid item xs={6}><Chip label="Fri - 9:AM - 2:PM" /></Grid>
                                <Grid item xs={6}><Chip label="Sat - 9:AM - 2:PM" /></Grid>
                                <Grid item xs={6}><Chip label="Sun - NA" /></Grid>
                            </Grid>
                            <Button variant="contained" color="primary" fullWidth className="appointment-button">
                                Book Appointment
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DoctorDetail;
