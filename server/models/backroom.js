module.exports = (sequelize, DataTypes) => {
  const Backroom = sequelize.define("Backroom", {
    // Business Information
  BusinessType: {
      type: DataTypes.STRING,
    },
    //DTI/SEC /CDA Registration No.
    dscRegNo: {
      type: DataTypes.STRING,
    },
    businessName: {
      type: DataTypes.STRING,
    },

    tinNo: {
      type: DataTypes.STRING,
    },

    TradeName: {
      type: DataTypes.STRING,
    },

    //Personal information

    firstName: {
      type: DataTypes.STRING,
    },

    middleName: {
      type: DataTypes.STRING,
    },

    lastName: {
      type: DataTypes.STRING,
    },
    //extention Name
    extName: {
      type: DataTypes.STRING,
    },

    sex: {
      type: DataTypes.STRING,
    },

    //CONTACT INFORMATION

    eMailAdd: {
      type: DataTypes.STRING,
    },

    telNo: {
      type: DataTypes.STRING,
    },

    mobileNo: {
      type: DataTypes.STRING,
    },

    //Business Address

    region: {
      type: DataTypes.STRING,
    },

    province: {
      type: DataTypes.STRING,
    },

    cityOrMunicipality: {
      type: DataTypes.STRING,
    },

    barangay: {
      type: DataTypes.STRING,
    },

        addressLine1: {
      type: DataTypes.STRING,
    },

    zipCode: {
      type: DataTypes.STRING,
    },

    pinAddress: {
      type: DataTypes.STRING,
    },

    //Business Operation

    totalFloorArea: {
      type: DataTypes.STRING,
    },

    numberOfEmployee: {
      type: DataTypes.STRING,
    },

    maleEmployee: {
      type: DataTypes.STRING,
    },

    femaleEmployee: {
      type: DataTypes.STRING,
    },

    numVehicleVan: {
      type: DataTypes.STRING,
    },

    numVehicleTruck: {
      type: DataTypes.STRING,
    },

    numVehicleMotor: {
      type: DataTypes.STRING,
    },


    //for Gasoline station
    numNozzle: {
      type: DataTypes.STRING,
    },

    weighScale: {
      type: DataTypes.STRING,
    },


    //Tax Payers Address

    Taxregion: {
      type: DataTypes.STRING,
    },

    Taxprovince: {
      type: DataTypes.STRING,
    },

    TaxcityOrMunicipality: {
      type: DataTypes.STRING,
    },

    Taxbarangay: {
      type: DataTypes.STRING,
    },

        TaxaddressLine1: {
      type: DataTypes.STRING,
    },
    

    TaxzipCode: {
      type: DataTypes.STRING,
    },

    TaxpinAddress: {
      type: DataTypes.STRING,
    },

    ownPlace:{
      type: DataTypes.STRING,
    },

    taxdec:{
      type: DataTypes.STRING,
    },

    lessorName:{
      type: DataTypes.STRING,
    },

    monthlyRent:{
      type: DataTypes.STRING,
    },


    //Tax Incentives from any Government Entity

    tIGE:{
        type: DataTypes.STRING,
    },

    tIGEfiles:{
      type: DataTypes.STRING,
    },


    //business activity

    officeType:{
        type: DataTypes.STRING,
    },

    officeTypeOther:{
        type: DataTypes.STRING,
    },

    lineOfBusiness:{
        type: DataTypes.STRING,
    },

    productService:{
      type: DataTypes.STRING,
    },

    Units:{
      type: DataTypes.STRING,
    },

    capital:{
      type: DataTypes.STRING,
    },

    //business Requirements

    proofOfReg:{
        type: DataTypes.STRING,
    },

    // /Proof of right of applicant to use location as business address, which may include any of the following: 
    // (Tax Declaration if owned or Contract of Lease/MOA or written consent of property if not owned)

    proofOfRightToUseLoc:{
        type: DataTypes.STRING,
    },

    //Location Plan or sketch of the location, clearly showing where business premises is located*

    locationPlan:{
        type: DataTypes.STRING,
    },
    
    //Barangay Clearance

    brgyClearance:{
        type: DataTypes.STRING,
    },

    //Market Clearance (if stallholder)

    marketClearance:{
        type:DataTypes.STRING,
    },

    //Photocopy of Occupancy Permit (if newly constructed building)

    occupancyPermit:{
        type: DataTypes.STRING,
    },

    //Community Tax Certificate (CEDULA)*

    cedula:{
        type: DataTypes.STRING,
    },

    //Actual Photo of whole Business Establishment (Interior)
    photoOfBusinessEstInt: {
        type: DataTypes.STRING,
    },

    //Actual Photo of whole Business Establishment (Exterior)
    photoOfBusinessEstExt: {
        type: DataTypes.STRING,
    },

    status:{
      type: DataTypes.STRING,
    },

    cmswo:{
      type: DataTypes.STRING,
    },

    obo:{
      type: DataTypes.STRING,
    },

    zoning:{
      type: DataTypes.STRING,
    },

    cho:{
      type: DataTypes.STRING,
    },

    cenro:{
      type: DataTypes.STRING,
    },






  });

  return Backroom;
};
