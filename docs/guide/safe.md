# Safe Operating Space (SOS) thematic

## Biodiversity                       

### *Approach: Grass land intensity - mowing event detection*

##### *Description*

Spatially explicit knowledge on grassland extent and management is critical to understand and monitor the impact of grassland use intensity on ecosystem services and biodiversity. While regional studies allow detailed insights into land use and ecosystem service interactions, information on a national scale can aid biodiversity assessments. However, for most European countries this information is not yet widely available. We used an analysis-ready-data cube that contains dense time series of co-registered Sentinel-2 and Landsat 8 data, covering the extent of Germany. We propose an algorithm that detects mowing events in the time series based on residuals from an assumed undisturbed phenology, as an indicator of grassland use intensity. 

##### *Main data sources to produce the data*

Among others
* Sentinel-1, Sentinel-2, Landsat 8 and additional environmental data

##### *Article*

Schwieder, M., Wesemeyer, M., Frantz, D., Pfoch, K., Erasmi, S., Pickert, J., Nendel, C., & Hostert, P. (2022). Mapping grassland mowing events across Germany based on combined Sentinel-2 and Landsat 8 time series. Remote Sensing of Environment, 269, 112795, [https://doi.org/10.1016/j.rse.2021.112795]

##### *Temporal and spatial coverage*

Spatial coverage: Germany. 

Temporal coverage: 2017-2021.

##### *Resolution*

Field level parcel data of different size for grass land.

##### *Data*

Schwieder, M., Lobert, F., Tetteh, G. O., & Erasmi, S. (2024). Grassland mowing events across Germany detected from combined Sentinel-2 and Landsat time series for the years 2017 - 2021 [Data set]. Zenodo. [https://doi.org/10.5281/zenodo.10609590]

##### *Visualization*

[Mowing events map]

## Land use    

### *Approach: crop type detection*

##### *Description*

Based on the multi-year dataset major crop sequences of cereals and leaf crops are mapped. Most crop sequences were dominated by winter cereals followed by summer cereals. Monocultures of summer cereals were mainly revealed in the Northwest of Germany. It is showcased that high spatial and thematic detail in combination with annual mapping will stimulate research on crop cycles and studies to assess the impact of environmental policies on management decisions. The results demonstrate the capabilities of integrated optical time series and SAR data in combination with variables describing local and seasonal environmental conditions for annual large-area crop type mapping.

##### *Main data sources to produce the data*

Among others
* Sentinel-2 and Landsat 8 data
* Sentinel-1 data
* Topographic variables elevation, hillslope, and aspect from a digital elevation model (DEM) with a spatial resolution of 10 m provided by the German Federal Agency for Cartography and Geodesy 
* High-resolution (1 x 1 km) climatological data on seasonal mean air temperature and precipitation from German Weather Service
* Reference data: Integrated Administration and Control System (IACS)

##### *Article*

Blickensdoerfer, L., Schwieder, M., Pflugmacher, D., Nendel, C., Erasmi, S., Hostert, P. (2022). Mapping of crop types and crop sequences with combined time series of Sentinel-1, Sentinel-2 and Landsat 8 data for Germany. Remote Sens Environ 269:112831, [DOI:10.1016/j.rse.2021.112831]

##### *Temporal and spatial coverage*

Spatial coverage: Germany. 

Temporal coverage: 2017-2021.

##### *Resolution*

Field level parcel data of different size.

##### *Data*

[https://doi.org/10.5281/zenodo.10617622]

##### *Visualization*

[Agricultural land use]
                                   
### *Approach: parcel segmentation*

##### *Description*

Effective monitoring of agricultural lands requires accurate spatial information about the locations and boundaries of agricultural fields. Through satellite imagery, such information can be mapped on a large scale at a high temporal frequency. Various methods exist in the literature for segmenting agricultural fields from satellite images. Edge-based, region-based, or hybrid segmentation methods are traditional methods that have widely been used for segmenting agricultural fields. Lately, the use of deep neural networks (DNNs) for various tasks in remote sensing has been gaining traction. Therefore, to identify the optimal method for segmenting agricultural fields from satellite images, we evaluated three state-of-the-art DNNs, namely Mask R-CNN, U-Net, and FracTAL ResUNet against the multi-resolution segmentation (MRS) algorithm, which is a region-based and a more traditional segmentation method. DNNs, particularly FracTAL ResUNet, can be effectively used for large-scale segmentation of agricultural fields from satellite images.

This work is especially important for crop type detection.

##### *Main data sources to produce the data*

Among others
* Sentinel-2 
* ATKIS
* Reference data: agricultural parcels of the Geospatial Aid Application (GSAA)

##### *Article*

Tetteh GO, Schwieder M, Erasmi S, Conrad C, Gocht A (2023). Comparison of an optimised multiresolution segmentation approach with deep neural networks for delineating agricultural fields from Sentinel-2 images. J Photogramm Remote Sensing Geoinf Sci 91(4):295-312, [DOI:10.1007/s41064-023-00247-x].

##### *Spatial coverage*

Spatial coverage: Lower Saxony - Federal state of Germany. 

##### *Resolution*

Field level parcel data of different size.

## Water use                          

## Nutrient flows                     
                                   
## Chemical pollution (novel entities)
                                   
## Aerosol loading                    

## Climate                            

### Comments regarding the current status

- Database extracted from De Laurentiis et al (2023). Data comprises estimated food loss and waste along the chain by product disaggregation level for each of the EU Member States for the period 2003-2020. Estimated data are available in a public domain area: [Joint Research Centre Data Catalogue].
Drivers according to the literature and extracted from open access sources, as an example: 
Population is available at: [Population on 1 January by age and sex].
Real GDP per capita is available at: [Real GDP per capita].
Unemployment rate is available at: [Total unemployment rate].
The databases have been merged, and preliminary statistical analysis has been conducted, along with the initial stages of econometric analysis yielding some preliminary results. 

- Cap context and result indicators were downloaded and compared as an important input for the definition of the Safe and Just operating space. 
Download links: [Result Indicators], [Context Indicators]

- 	The FADN data received in April 2024 are by default split in organic (fully converted) and conventional to permit a statistical analysis of productivity and intensity differences between these two farm specializations and to generate input data for the FarmDyn model. 

- Improved application of lancet diet shifts in raw product models; Application for EFSA consumer data ongoing. Food intake quantities stem from the German National Nutrition Survey II (NVSII) from 2006 with 13,926 randomly selected participants, representative of the German-speaking population, between the ages of 14 and 80 questioned in 24h-recalls about their intake of food and beverages (Brombach et al., 2006; Krems et al., 2006). The participants were selected randomly in around 500 municipalities and are representative of the German-speaking population. The 24h-recalls are available at EFSA’s comprehensive food consumption database (EFSA, 2023). 

- This dataset comprises spatial biophysical data regarding aspect, elevation and slope derived from [Global and European Digital Elevation Model (COP-DEM)] and topsoil properties derived from [Topsoil physical properties for Europe] to the NUTS regions across Europe. The dataset consists of two files, each corresponding to a different level of NUTS coding (NUTS 2/3).


[https://doi.org/10.5281/zenodo.10609590]:https://doi.org/10.5281/zenodo.10609590
[DOI:10.1007/s41064-023-00247-x]:DOI:10.1007/s41064-023-00247-x
[Agricultural land use]:https://atlas.thuenen.de/catalogue/#/dataset/205
[Mowing events map]:https://atlas.thuenen.de/catalogue/#/dataset/215
[https://doi.org/10.5281/zenodo.10617622]:https://doi.org/10.5281/zenodo.10617622
[https://doi.org/10.1016/j.rse.2021.112795]:https://doi.org/10.1016/j.rse.2021.112795
[DOI:10.1016/j.rse.2021.112831]:https://doi.org/10.1016/j.rse.2021.112831
[Joint Research Centre Data Catalogue]:http://data.europa.eu/89h/a86ae681-f051-4809-85f3-5fa0ad7b25ee
[Population on 1 January by age and sex]: https://ec.europa.eu/eurostat/databrowser/view/demo_pjan__custom_10368095/default/table
[Real GDP per capita]: https://ec.europa.eu/eurostat/databrowser/view/sdg_08_10/default/table
[Total unemployment rate]: https://ec.europa.eu/eurostat/databrowser/view/tps00203__custom_10340859/default/table
[Result Indicators]: https://agridata.ec.europa.eu/extensions/DashboardCapPlan/result_indicators.html
[Context Indicators]: https://agridata.ec.europa.eu/extensions/DataPortal/context_indicators.html
[Global and European Digital Elevation Model (COP-DEM)]: https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model
[Topsoil physical properties for Europe]:https://esdac.jrc.ec.europa.eu/content/topsoil-physical-properties-europe-based-lucas-topsoil-data 