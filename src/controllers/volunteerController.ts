import { Request, Response } from "express";
import Volunteer, { IVolunteerModel } from "../models/volunteer";
import { buscarGeolocalizacao } from "../services/cep";

export const createVolunteer = async (req: Request, res: Response) => {
  try {
    const { results } = await buscarGeolocalizacao(req.body.cep);
    const location = {
      lat: results[0].geometry.lat,
      lng: results[0].geometry.lng,
    };
    const volunteer: IVolunteerModel = new Volunteer({
      ...req.body,
      location,
      role: "volunteer",
    });
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(400).json({ message: "Error creating volunteer", error });
  }
};

export const getVolunteers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const volunteers = await Volunteer.find().skip(skip).limit(limit);
    const total = await Volunteer.countDocuments();

    res.json({
      volunteers,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteers", error });
  }
};

export const getVolunteerById = async (req: Request, res: Response) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json(volunteer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteer", error });
  }
};

export const updateVolunteer = async (req: Request, res: Response) => {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json(volunteer);
  } catch (error) {
    res.status(400).json({ message: "Error updating volunteer", error });
  }
};

export const deleteVolunteer = async (req: Request, res: Response) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting volunteer", error });
  }
};

export const getLocations = async (req: Request, res: Response) => {
  try {
    const volunteers = await Volunteer.find().select("location").select("name");

    res.json({
      volunteers,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching locations", error });
  }
};

export const invite = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    // vou enviar o email
    res.json({ message: `Volunteer invited: ${email}` });
  } catch (error) {
    res.status(500).json({ message: "Error inviting volunteer", error });
  }
};
